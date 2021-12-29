class UsersController {
    constructor () {

    }

    addUser(user) {
        return new Promise((resolve, reject) => {
            if (!user) {
                reject('Invalid User');
            }
            const newUser = {
                id: Math.random() * 500,
                ...user,
                rol: '',
                state: 'PENDING'
            }
            resolve(newUser);

        })
    }
}

module.exports = UsersController;
