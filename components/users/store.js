const UserModel = require('./model');


class UsersDB {
    constructor() {
    }


    async getUsers() {
        const users = await UserModel.find();
        return users;
    }

    async getUser(userId) {
        const user = await UserModel.findById(userId);
        return user;
    }

    addUser(user) {
        const newUser = new UserModel(user);
        newUser.save();
    }

    async updateUser(id, userParams) {
        const user = await UserModel.findByIdAndUpdate(id, {
            ...userParams
        });
        return user;
    }

    async deleteUser(id) {
        const user = await UserModel.findByIdAndDelete(id);
        return user;
    }

}

module.exports = UsersDB;
