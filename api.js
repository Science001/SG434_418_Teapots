const express = require("express");
const api = express.Router();

//Body Parser ---------------------------------------------
const bodyParser = require('body-parser')
api.use(bodyParser.json())
//------------------------------------------------------------

//Code Starts here -------------------------------------------

api.get('/', (req, res) => {
    res.send("Welcome to /api");
})

//------------------------------------------------------------


module.exports = api;