const User = require('../models/user');
const RESPONSE_STATUS = require('../utils/response-status');

class UsersController {
    get(req, res) {
        const user = new User();
        console.log('Fetching user...', req.user);
        user.findAll().then(response => {
            res.status(RESPONSE_STATUS.SUCCESS).send(response);
        }).catch(err => {
            res.status(RESPONSE_STATUS.BAD_REQUEST).send('Something went wrong');
        });
    }

    create(req, res) {
        const user = new User();
        user.insert(req.body);
        res.send('Will create a new user');
    }

    getById(req, res) {
        const user = new User();
        user.find(req.params.id).then(response => {
            res.status(RESPONSE_STATUS.SUCCESS).send(response);
        }).catch(err => {
            res.status(RESPONSE_STATUS.BAD_REQUEST).send('User not found');
        });
    }
}

module.exports = new UsersController();