const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./src/routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static('public'));
app.use('/api', routes);


const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const db = process.env.DB_URI;

mongoose.connect(db)
    .then(() => {
        console.log('Connected to the database');
        app.listen(port, () => {
            if (process.env.NODE_ENV === 'dev') {
                console.log(`App is running on ${host}:${port}`);
            } else {
                console.log(`App is running on Production mode`);
            }
        })
    })
    .catch(err => {
        throw err;
    });

