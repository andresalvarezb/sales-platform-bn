class UsersService {
    constructor() {
        this.users = [];

    }

    create(user) {
        const newUser = {
            ...user
        }
        this.users.push(newUser);
    };

    find() {
        return this.users;
    };

    findOne(id) {
        return this.users.find(item => item.id === id);
    }

    update() { };
    updateOne() { };
    delete() { };


}

module.exports = UsersService;
