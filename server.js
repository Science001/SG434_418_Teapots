const express = require('express')
const { Pool } = require('pg')
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('dotenv').config()
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

app.use('/api', require('./api'))

app.listen(PORT, () => console.log(`SG434_418_Teapots running at ${PORT}`))
