const express = require('express');
const users = require('../components/users/network');
const products = require('../components/products/network');
const invoices = require('../components/invoices/network');

function routes(app) {
    app.use('/users', users);
    // app.use('/products', products);
    // app.use('/invoices', invoices);
};

module.exports = routes;
