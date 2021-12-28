const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.send('Products')
})


router.get('/:productId', (req, res) => {
    const { productId } = req.params;
    res.send('product', productId);
});

// POST
router.post('/:productId', (req, res) => {
    const { productId } = req.params;
    const body = req.body;
    res.json({
        productId,
        message: 'Created Product',
        body
    });
});

// PUT
router.put('/:productId', (req, res) => {
    const { productId } = req.params;
    const body = req.body;
    res.json({
        productId,
        message: 'Update Product',
        body
    });
});

// PATCH
router.patch('/:productId', (req, res) => {
    const { productId } = req.params;
    const body = req.body;
    res.json({
        productId,
        message: 'Update Product',
        body
    });
});

// DELETE
router.patch('/:productId', (req, res) => {
    const { productId } = req.params;
    res.json({
        message: `Delete Product ${productId}`,
    });
});

module.exports = router;
