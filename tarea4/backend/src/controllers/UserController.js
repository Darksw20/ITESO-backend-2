const UserService = require('../services/UserService');

const controller = {
    register: async (req, res) => {
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                return res.status(422).json({ message: 'Email and password are required' });
            }
            const response = await UserService.register(email, password);
            res.json(response);
        } catch (error) {
            res.status(422).json(error);
        }
    }
}
module.exports = controller;