const mongoose = require('mongoose');
// const UserModel = require('../users/model');
const ProductModel = require('../products/model.js');
const { Schema, model } = mongoose;

const InvoiceSchema = new Schema({
    // seller: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: UserModel
    // },
    client: {
        clientName: {
            type: String,
            required: true,
        },
        identification: {
            type: String,
            required: true,
            unique: true,
        },
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: ProductModel,
        }
    ],
    state: {
        type: String,
        enum: ['IN_PROCESS', 'CANCELED', 'DELIVERED'],
        default: 'IN_PROCESS',
    },

});

/**
 * 1. The collection's name
 * 2. The Schema
 */
const InvoiceModel = model('Invoices', InvoiceSchema);

module.exports = InvoiceModel;
