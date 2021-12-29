class UsersDB {
    constructor() {
        this.listUsers = [];
    }

    addUser(user) {
        this.listUsers.push(user);
    }

    getUsers() {
        return this.listUsers;
    }
}

module.exports = UsersDB;
