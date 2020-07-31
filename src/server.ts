import express from 'express';
import { Pool } from 'pg';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

import api from './api'

const app = express()
const PORT = process.env.PORT
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
})

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
else {
    app.use(morgan('combined'))
}

app.use(bodyParser.json())

app.get('/', (_req, res) => {
    res.send('SG434 - Data Storage and Analytics Dashboard')
})

app.use('/api', api)

app.listen(PORT, () => console.log(`SG434_418_Teapots running at ${PORT}`))
