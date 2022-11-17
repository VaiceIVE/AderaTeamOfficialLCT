from fastapi import FastAPI, UploadFile, Request
from excelProcessing import exProcess
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from datetime import datetime
from typing import Union
from pydantic import BaseModel
import shutil
from schemas import keywords
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://2051-188-72-108-227.eu.ngrok.io/api/table/"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
        name: str
        spgz: str
        kpgz: str
@app.get('/')
def home():
    return{"key": "Hello"}

@app.post('/getdictionary')
def updictionary():
    return keywords

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
@app.post('/updatedictionary')
def updictionary(req: Item):
    item = {"num" :len(keywords) + 1, "name" : req.name, "spgz" : req.spgz, "kpgz" : req.kpgz}
    keywords.append(item)
    return keywords



