import { useState } from "react";
import "./App.css";

function App() {

  const [age, setAge] = useState(21);
  const [gender, setGender] = useState("Male");
  const [marital, setMarital] = useState("Single");
  const [education, setEducation] = useState("Bachelor");
  const [sleep, setSleep] = useState(7);
  const [jobSat, setJobSat] = useState(5);
  const [stress, setStress] = useState(2);
  const [prediction, setPrediction] = useState("");

  const handlePredict = async () => {

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        age: age,
        gender: gender,
        marital_status: marital,
        education_level: education,
        sleep_hours: sleep,
        job_satisfaction_score: jobSat,
        financial_stress_level: stress
      })
    });

    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <div className="container">

      <h1>Mental Health Risk Predictor</h1>

      <div className="grid">

        <div className="field">
          <label>Age</label>
          <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
        </div>

        <div className="field">
          <label>Gender</label>
          <select value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="field">
          <label>Marital Status</label>
          <select value={marital} onChange={(e)=>setMarital(e.target.value)}>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
          </select>
        </div>

        <div className="field">
          <label>Education</label>
          <select value={education} onChange={(e)=>setEducation(e.target.value)}>
            <option>High School</option>
            <option>Bachelor</option>
            <option>Master</option>
            <option>PhD</option>
          </select>
        </div>

      </div>

      <div className="slider-group">
        <label>Sleep Hours: {sleep}</label>
        <input type="range" min="0" max="24" value={sleep} onChange={(e)=>setSleep(e.target.value)} />
      </div>

      <div className="slider-group">
        <label>Job Satisfaction: {jobSat}</label>
        <input type="range" min="0" max="10" value={jobSat} onChange={(e)=>setJobSat(e.target.value)} />
      </div>

      <div className="slider-group">
        <label>Financial Stress: {stress}</label>
        <input type="range" min="0" max="10" value={stress} onChange={(e)=>setStress(e.target.value)} />
      </div>

      <button className="predict-btn" onClick={handlePredict}>
        Predict
      </button>

      {prediction && (
        <div className="result">
          Prediction: {prediction}
        </div>
      )}

    </div>
  );
}

export default App;