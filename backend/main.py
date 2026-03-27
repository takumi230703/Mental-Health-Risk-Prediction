from fastapi import FastAPI
from routes import predict

app = FastAPI()

@app.get("/")
def greet():
    return {"message": "Welcome!"}

app.include_router(predict.router)





