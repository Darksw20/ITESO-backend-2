const service = {
    login: (email, password) => {
        return new Promise((resolve, reject) => {
            if (email === 'admin' && password === 'admin') {
                resolve({ message: 'Login success' });
            } else {
                reject({ message: 'Login failed' });
            }
        });
    }
}

module.exports = service;