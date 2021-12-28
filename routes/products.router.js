const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Products')
})


router.get('/products/:id', (req, res) => {
    res.send('Products')
});

module.exports = router;
