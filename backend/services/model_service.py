import joblib
import pandas as pd


data = joblib.load("/Users/user/my_project/Mental-Health-Risk-Prediction/notebooks/mental_health_model.pkl")
model = data["model"]
features = data["features"]

def predict_fn(input_data):
    df = pd.DataFrame([input_data])
    df = pd.get_dummies(df)
    df = df.reindex(columns=features, fill_value=0)
    
    pred = model.predict(df)
    return {"prediction": int(pred[0])}



