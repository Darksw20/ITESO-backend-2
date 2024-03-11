const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');


const service = {
    register: (email, password) => {
        return new Promise((resolve, reject) => {

            const hash = crypto.createHash('sha256').update(password).digest('hex');
            User.create({
                email: email,
                password: hash
            }).then((response) => {
                resolve({
                    message: 'User registered',
                    response
                });
            }).catch((error) => {
                reject({
                    message: 'Error registering user',
                    error
                });
            });

        });
    }
}

module.exports = service;