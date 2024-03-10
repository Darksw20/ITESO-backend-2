const crypto = require('crypto');
const User = require('../models/User');

const service = {
    login: (email, password) => {
        return new Promise((resolve, reject) => {
            const hash = crypto.createHash('sha256').update(password).digest('hex');

            User.findOne({ email, password: hash })
                .then((response) => {
                    if (response) {
                        resolve({ message: 'Login success' });
                    } else {
                        reject({ message: 'Login failed' });
                    }
                }).catch((error) => {
                    reject({ message: 'Error logging in', error });
                });
        });
    }
}

module.exports = service;