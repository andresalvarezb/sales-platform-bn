const response = require('../../network/response');
const express = require('express');
const ProductsController = require('./controller');
const router = express.Router();
const controller = new ProductsController();

// GET
router.get('/', (req, res) => {
    controller.getProducts()
        .then((listProducts) => {
            response.success(req, res, listProducts, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 401, '[error] empty list')
        })
})


router.get('/:productId', (req, res) => {
    const { productId } = req.params;
    controller.getProduct(productId)
        .then((product) => {
            response.success(req, res, product, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 401, '[error] Does not exist')
        })
});

// POST
router.post('/', (req, res) => {
    controller.addProduct(req.body)
        .then((product) => {
            response.success(req, res, product, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 401, '[error] check parameters')
        });
});

// PUT
router.put('/:productId', (req, res) => {
    const { productId } = req.params;
    controller.updateProduct(productId, req.body)
        .then((product) => {
            response.success(req, res, product, 200);
        })
        .catch((err) => {
            response.error(req, res, err, 401, '[error] check parameters')
        });
});

// PATCH
router.patch('/:productId', (req, res) => {
    const { productId } = req.params;
    controller.updateProductByParams(productId, req.body)
        .then((product) => {
            response.success(req, res, product, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 401, 'check the params')
        })
});

// DELETE
router.delete('/:productId', (req, res) => {
    const { productId } = req.params;
    controller.deleteProduct(productId)
        .then((product) => {
            response.success(req, res, product, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 401)
        })
});

module.exports = router;
