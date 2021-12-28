const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('invoices')
})


router.get('/:invoiceId', (req, res) => {
    res.send('invoices')
});

module.exports = router;
