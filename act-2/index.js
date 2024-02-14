const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

const { authToken } = require('./src/middleware/auth')
const users = require('./src/routes/users')

app.get('/healthcheck', (req, res) => {
    res.send('Working Fine Pal!')
})

app.use('/users', authToken, users)

app.listen(port, () => {
    if (process.env.NODE_ENV === 'dev') {
        console.log(`App is running on ${host}:${port}`)
    } else {
        console.log(`App is running on Production mode`)
    }
})
