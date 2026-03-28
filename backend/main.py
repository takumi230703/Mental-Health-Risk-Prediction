from fastapi import FastAPI
from routes import predict
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

@app.get("/")
def greet():
    return {"message": "Welcome!"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predict.router)





