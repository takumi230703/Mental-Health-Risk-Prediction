import joblib
import pandas as pd


data = joblib.load("notebooks/mental_health_model.pkl")
model = data["model"]
features = data["features"]

def predict_fn(input_data):
    df = pd.DataFrame([input_data])
    df = pd.get_dummies(df)
    df = df.reindex(columns=features, fill_value=0)
    
    pred = model.predict(df)
    return int(pred[0])




