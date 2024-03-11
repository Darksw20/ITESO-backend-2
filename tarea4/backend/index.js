const express = require('express');
require('dotenv').config({ path: `../.env.${process.env.NODE_ENV}` });
const path = require('path');
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
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use('/static', express.static('public'));
app.use('/api', routes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const port = process.env.BACK_PORT || 3000;
const host = process.env.BACK_HOST || 'localhost';
const db = process.env.DB_URI;

mongoose.connect(db)
    .then(() => {
        console.log('Connected to the database');
        app.listen(port, () => {
            if (process.env.NODE_ENV === 'development') {
                console.log(`App is running on ${host}:${port}`);
            } else {
                console.log(`App is running on Production mode on ${host}:${port}`);
            }
        })
    })
    .catch(err => {
        throw err;
    });

