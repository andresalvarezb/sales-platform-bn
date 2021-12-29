const UsersDB = require('./store');
const store = new UsersDB();
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
            store.addUser(newUser);
        })
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            const users = store.getUsers()
            if (users.length > 0 ) resolve(users);
            else reject('There are no users')
        })
    }
}

module.exports = UsersController;
