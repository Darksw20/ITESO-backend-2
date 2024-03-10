const AuthService = require('../services/AuthService');

const controller = {
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const response = await AuthService.login(email, password);
            res.json(response);
        } catch (error) {
            res.status(422).json(error);
        }
    }
}
module.exports = controller;