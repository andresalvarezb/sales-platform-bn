const UsersDB = require('./store');
const store = new UsersDB();
class UsersController {
    constructor () {

    }

    addUser(user) {
        return new Promise((resolve, reject) => {
            if (!user) reject('Invalid User');
            resolve(user);
            store.addUser(user);
        })
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            const users = store.getUsers()
            users ? resolve(users) : reject('There are no users');
        })
    }
}

module.exports = UsersController;
