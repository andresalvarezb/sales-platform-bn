const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const invoicesRouter = require('./invoices.router');
const express = require('express');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);

    router.get('/user', usersRouter);
    router.get('/products', productsRouter);
    router.get('/invoices', invoicesRouter);
};

module.exports = routerApi;
