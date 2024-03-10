const router = require('express').Router();

const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const NewsController = require('../controllers/NewsController');

const { authToken } = require('../middlewares/Auth');

router.get('/healthcheck', (req, res) => {
    res.send('Working Fine Pal!');
})

router.get('/news', authToken, (req, res) => NewsController.get(req, res))

router.post('/users', (req, res) => UserController.register(req, res))

router.post('/login', (req, res) => AuthController.login(req, res));

module.exports = router;