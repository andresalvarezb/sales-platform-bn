const response = require('../../network/response');
const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
    response.success(req, res, 'invoices', 200);
})


router.get('/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;
    res.send('invoice', invoiceId);
});

// POST
router.post('/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;
    const body = req.body;
    res.json({
        invoiceId,
        message: 'Created Invoice',
        body
    });
});

// PUT
router.put('/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;
    const body = req.body;
    res.json({
        invoiceId,
        message: 'Update Invoice',
        body
    });
});

// PATCH
router.patch('/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;
    const body = req.body;
    res.json({
        invoiceId,
        message: 'Update Invoice',
        body
    });
});

// DELETE
router.patch('/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;
    res.json({
        message: `Delete Invoice ${invoiceId}`,
    });
});
module.exports = router;
