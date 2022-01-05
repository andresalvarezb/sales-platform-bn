const response = require('../../network/response');
const express = require('express');
const router = express.Router();

const InvoicesController = require('./controller');
const controller = new InvoicesController();

// GET
router.get('/', (req, res) => {
    controller.getInvoices()
        .then((listInvoices) => {
            response.success(req, res, listInvoices, 200);
        })
        .catch((err) => {
            response.error(req, res, 'Probably the list is empty', 500, err)
        })

})

router.get('/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;
    controller.getInvoice(invoiceId)
        .then((invoice) => {
            response.success(req, res, invoice, 200);
        })
        .catch((err) => {
            response.error(req, res, 'The ID is wrong', 500, err)
        })
})

// POST
router.post('/', (req, res) => {
    controller.addInvoice(req.body)
        .then((invoice) => {
            response.success(req, res, invoice, 201)
        })
        .catch((err) => {
            response.error(req, res, err, 400, 'empty fields')
        })
});

// PATCH
router.patch('/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;
    controller.updateInvoice(invoiceId, req.body)
        .then((invoice) => {
            response.success(req, res, invoice, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 400)
        })
});

// DELETE
router.delete('/:invoiceId', (req, res) => {
    const { invoiceId } = req.params;
    controller.deleteInvoice(invoiceId)
        .then((invoice) => {
            response.success(req, res, invoice, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 400)
        })
});

module.exports = router;
