const NewsService = require('../services/NewsService');

const controller = {
    get: async (req, res) => {
        const { query } = req.query;
        try {
            if (query) {
                const response = await NewsService.find(query);
                return res.json(response);
            }
            const response = await NewsService.getAll();
            res.json(response);
        } catch (error) {
            res.status(422).json(error);
        }
    }
}
module.exports = controller;