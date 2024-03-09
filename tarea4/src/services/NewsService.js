const service = {
    find: (query) => {
        return new Promise((resolve, reject) => {
            resolve({ query: query, news: [] });
        });
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            resolve({ news: [] });
        });
    }
}

module.exports = service;