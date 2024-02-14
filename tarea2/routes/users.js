const router = require('express').Router()
const axios = require('axios');
const url = process.env.API_ENDPOINT;

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${url}/users`);
        res.status(200).json(response.data)
    } catch (error) {
        res.status(error.code).send('Users not found')
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`${url}/users/${id}`);
        res.status(200).json(response?.data)
    } catch (error) {
        res.status(error.code).send('User not found')
    }
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const response = await axios.post(`${url}/users`, { name });
        res.status(201).json(response?.data)
    } catch (error) {
        res.status(error.code).send('User not created')
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const response = await axios.put(`${url}/users/${id}`, { name: name });
        res.status(200).json(response?.data)
    } catch (error) {
        res.status(error.code).send('User not updated')
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.delete(`${url}/users/${id}`);
        res.status(200).json(response?.data)
    } catch (error) {
        res.status(error.code).send('User not deleted')
    }
})

module.exports = router