const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const users = require('./routes/users')
const auth = require('./routes/auth')

app.use('/users', users)
app.use('/auth', auth)

app.listen(port, () => {
    if (process.env.NODE_ENV === 'dev') {
        console.log(`App is running on port ${port}`)
    } else {
        console.log(`App is running`)
    }
})
