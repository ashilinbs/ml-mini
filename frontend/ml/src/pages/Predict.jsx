import { useState } from "react";
import axios from "axios";

function Predict() {
  const [form, setForm] = useState({
    "Soil Moisture": "",
    "Temperature": "",
    " Soil Humidity": "",
    "Time": "",
    "Air temperature (C)": "",
    "Wind speed (Km/h)": "",
    "Air humidity (%)": "",
    "Wind gust (Km/h)": "",
    "Pressure (KPa)": "",
    "ph": "",
    "rainfall": "",
    "N": "",
    "P": "",
    "K": "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    try {
      const res = await axios.post("http://localhost:5000/predict", form);
      setResult(res.data.predicted_status);
    } catch (err) {
      setResult("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 p-6">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Smart Irrigation Prediction
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter the required parameters to predict the irrigation status.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(form).map((field) => (
            <div key={field} className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">{field}:</label>
              <input
                type="number"
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={`Enter ${field}`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePredict}
          className="w-full mt-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 shadow-md transition duration-300"
        >
          Predict
        </button>
        {result && (
          <div className="mt-6 text-center text-lg font-bold text-green-600">
            Prediction: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default Predict;