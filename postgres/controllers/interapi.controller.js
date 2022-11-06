const db = require('../db')
const XMLHttpRequest = require('xhr2')
const bodyParser = require('body-parser');
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

class InterApiContriller
{
    async processXlsx(req, res)
    {
        const fileRecievedFromClient = req.file; //File Object sent in 'fileFieldName' field in multipart/form-data
        
        console.log(req.file)
        
        let form = new FormData();
        form.append('file', fileRecievedFromClient.buffer, fileRecievedFromClient.originalname);
    
        axios.post('http://127.0.0.1:3000/exprocess', form, {
                headers: {
                    'Content-Type': `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; boundary=${form._boundary}`
                }
            }).then((responseFromServer2) => {
                res.send(responseFromServer2.data)
            }).catch((err) => {
                console.log(err)
                res.send("ERROR")
            })
    }

    async addKpgz(req, res)
    {
        const fileRecievedFromClient = req.file; //File Object sent in 'fileFieldName' field in multipart/form-data
        
        console.log(req.file)
        
        let form = new FormData();
        form.append('file', fileRecievedFromClient.buffer, fileRecievedFromClient.originalname);
    
        axios.post('http://127.0.0.1:3000/addkpgz', form, {
                headers: {
                    'Content-Type': `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; boundary=${form._boundary}`
                }
            }).then((responseFromServer2) => {
                res.send(responseFromServer2.data)
            }).catch((err) => {
                console.log(err)
                res.send("ERROR")
            })
    }
}

module.exports = new InterApiContriller()
