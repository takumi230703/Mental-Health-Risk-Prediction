from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import APIRouter
import joblib
from services.model_service import predict_fn



class PredictRequest(BaseModel):
    age: int
    gender: str
    marital_status: str
    education_level: str
    sleep_hours: float
    job_satisfaction_score: float
    financial_stress_level: float

router = APIRouter()

@router.post("/predict")
def predict(data: PredictRequest):
    
    input_data = data.dict()
    
    
    result = predict_fn(input_data)
    
    return result
    