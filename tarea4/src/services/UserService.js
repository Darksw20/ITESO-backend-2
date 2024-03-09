const service = {
    register: (email, password) => {
        return new Promise((resolve, reject) => {
            resolve({
                message: 'User registered',
                user: {
                    email: email
                }
            });
        });
    }
}

module.exports = service;