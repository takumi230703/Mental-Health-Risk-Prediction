from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import APIRouter
from services.model_service import predict_fn



class PredictRequest(BaseModel):
    age: int
    gender: str
    marital_status: str
    education_level: str
    sleep_hours: float
    job_satisfaction_score: int
    financial_stress_level: int

router = APIRouter()

@router.post("/predict")
def predict(data: PredictRequest):
    
    input_data = data.dict()
    
    
    prediction = predict_fn(input_data)
    
    label_map = {
        0: "Low Mental Health Risk",
        1: "Moderate Mental Health Risk",
        2: "High Mental Health Risk"
    }
    
    return {"prediction": label_map[prediction]}

