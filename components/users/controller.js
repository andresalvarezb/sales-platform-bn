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

    getUser(userId) {
        return new Promise((resolve, reject) => {
            const user = store.getUser(userId)
            user ? resolve(user) : reject('There is no user');
        })
    }

    updateUser(id, userParams) {
        return new Promise((resolve, reject) => {
            if (!id || !userParams) reject('Invalid data');
            const user = store.updateUser(id, userParams);
            if (!user) reject('Don\'t exist this user');
            resolve(user);
        })
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            if (!id) reject('Invalid ID');
            const user = store.deleteUser(id);
            if (!user) reject('Don\'t exist this user');
            resolve(user);
        })
    }
}

module.exports = UsersController;
