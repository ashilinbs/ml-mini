from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model artifacts
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")
imputer = joblib.load("imputer.pkl")
feature_names = joblib.load("feature_names.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        input_values = [data.get(feature, None) for feature in feature_names]

        # Impute missing if any
        input_imputed = imputer.transform([input_values])
        input_scaled = scaler.transform(input_imputed)

        # Predict
        prediction = model.predict(input_scaled)
        return jsonify({"predicted_status": prediction[0]})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route("/")
def home():
    return "Model is live!"

if __name__ == "__main__":
    app.run(debug=True)
