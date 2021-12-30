const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: ['AVAILABLE', 'NO_AVAILABLE'],
        default: 'AVAILABLE',
    },
});

/**
 * 1. The collection's name
 * 2. The Schema
 */
const ProductModel = model('Products', ProductSchema);

module.exports = ProductModel;
