const mockUsers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@doe.com'
    }
];

class User {
    find(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = mockUsers.find(user => user.id === id);
                if (user) {
                    resolve(user);
                } else {
                    reject('User not found');
                }
            }, 1000);
        });
    }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([...mockUsers]);
            }, 1000);
        });
    }

    insert(newUser) {
        mockUsers.push(newUser);
    }
}