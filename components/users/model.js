const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    identification: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'The email format is wrong',
        },
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        enum: ['ADMINISTRATOR', 'SELLER', ''],
        default: ''
    },
    state: {
        type: String,
        enum: ['PENDING', 'AUTHORIZED', 'NO_AUTHORIZED'],
        default: 'PENDING',
    },
});

/**
 * 1. The collection's name
 * 2. The Schema
 */
const UserModel = model('Users', UserSchema);

module.exports = UserModel;
