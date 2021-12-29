const mongoose = require('mongoose');
const UserModel = require('./model');


class UsersDB {
    constructor() {
    }

    addUser(user) {
        const newUser = new UserModel(user);
        newUser.save();
    }

    async getUsers() {
        const users = await UserModel.find();
        return users;
    }
}

module.exports = UsersDB;
