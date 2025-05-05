import { useState } from 'react';
import axios from 'axios';

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
    "K": ""
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

  // CSS styles
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '30px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px'
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '12px'
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '4px',
      color: '#444'
    },
    input: {
      padding: '8px',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1px solid #ccc'
    },
    button: {
      marginTop: '20px',
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer'
    },
    result: {
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '18px',
      color: 'green',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Smart Irrigation Prediction</h1>
      {Object.keys(form).map((field) => (
        <div key={field} style={styles.field}>
          <label style={styles.label}>{field}:</label>
          <input
            type="number"
            name={field}
            value={form[field]}
            onChange={handleChange}
            style={styles.input}
            placeholder={`Enter ${field}`}
          />
        </div>
      ))}
      <button style={styles.button} onClick={handlePredict}>Predict</button>
      {result && <div style={styles.result}>Prediction: {result}</div>}
    </div>
  );
}

export default Predict;
