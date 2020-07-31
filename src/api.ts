import express from "express";
const api = express.Router();

// Body Parser ---------------------------------------------
import bodyParser from 'body-parser';
api.use(bodyParser.json())
// ------------------------------------------------------------

// Code Starts here -------------------------------------------

api.get('/', (req, res) => {
    res.send("Welcome to /api");
})

// ------------------------------------------------------------


export default api;