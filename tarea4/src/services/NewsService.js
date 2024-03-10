const axios = require('axios');
const url = process.env.NEWS_API_ENDPOINT;
const key = process.env.NEWS_API_KEY;

const service = {
    find: (query, from, sort) => {
        return new Promise((resolve, reject) => {
            try {
                axios.get(`${url}/everything?q=${query}&from=${from}&sortBy=${sort}&apiKey=${key}`)
                    .then((response) => {
                        resolve({
                            query: query,
                            total: response.data.totalResults,
                            news: response.data.articles
                        });
                    }).catch((error) => {
                        reject({ message: 'Error getting news', error });
                    });
            } catch (error) {
                reject({ message: 'Error getting news', error });
            }
        });
    }
}

module.exports = service;