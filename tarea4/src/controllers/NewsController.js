const NewsService = require('../services/NewsService');

const controller = {
    get: async (req, res) => {
        let query = req.query?.query;
        let from = req.query?.from;
        let sort = req.query?.sort;
        try {
            if (query && from && sort) {
                const response = await NewsService.find(query, from, sort);
                return res.json(response);
            }
            return res.status(422).json({ message: 'Missing parameters' });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = controller;