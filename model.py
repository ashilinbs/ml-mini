import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

# Step 1: Load data
df = pd.read_csv("TARP.csv")

# Step 2: Drop rows where target is missing
df = df.dropna(subset=['Status'])

# Step 3: Impute missing feature values with mean
features = df.drop('Status', axis=1)
target = df['Status']

imputer = SimpleImputer(strategy='mean')
features_imputed = pd.DataFrame(imputer.fit_transform(features), columns=features.columns)

# Step 4: Scale the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(features_imputed)

# Step 5: Split the data
X_train, X_test, y_train, y_test = train_test_split(X_scaled, target, test_size=0.2, random_state=42)

# Step 6: Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 7: Save model and utilities
joblib.dump(model, "model.pkl")
joblib.dump(scaler, "scaler.pkl")
joblib.dump(imputer, "imputer.pkl")
joblib.dump(list(features.columns), "feature_names.pkl")

print("✅ Model, scaler, and imputer saved.")
