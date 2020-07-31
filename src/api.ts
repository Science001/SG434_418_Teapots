import express from "express";
const api = express.Router();

// Body Parser ---------------------------------------------
import bodyParser from 'body-parser';
import user from "./routers/user.route";
api.use(bodyParser.json())
// ------------------------------------------------------------

// Code Starts here -------------------------------------------

api.get('/', (_req, res) => {
    res.send("Welcome to /api");
})

api.use('/user', user);

// ------------------------------------------------------------


export default api;