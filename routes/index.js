const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const invoicesRouter = require('./invoices.router');

function routerApi(app) {
    app.get('/user', usersRouter);
    app.get('/products', productsRouter);
    app.get('/invoices', invoicesRouter);
};

module.exports = routerApi;
