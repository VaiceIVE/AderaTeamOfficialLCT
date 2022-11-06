from fastapi import FastAPI, UploadFile
from excelProcessing import exProcess
from fastapi.middleware.cors import CORSMiddleware

import shutil
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://localhost:8000/api/table/"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def home():
    return{"key": "Hello"}


@app.post('/exprocess')
def exeltable(file: UploadFile):
    with open('tables/' + file.filename, "wb") as wf:
        shutil.copyfileobj(file.file, wf)
        file.file.close()

    return exProcess(file.filename)

@app.post('/addkpgz')
def kpgz(file: UploadFile):
    with open('kpgz/' + file.filename, "wb") as wf:
        shutil.copyfileobj(file.file, wf)
        file.file.close()

    return "Ok"
