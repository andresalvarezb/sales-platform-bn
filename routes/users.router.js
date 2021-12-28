const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.send('users');
})

router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    res.send('user', userId);
});

// POST
router.post('/:userId', (req, res) => {
    const { userId } = req.params;
    const body = req.body;
    res.json({
        userId,
        message: 'Created User',
        body
    });
});

// PUT
router.put('/:userId', (req, res) => {
    const { userId } = req.params;
    const body = req.body;
    res.json({
        userId,
        message: 'Update User',
        body
    });
});

// PATCH
router.patch('/:userId', (req, res) => {
    const { userId } = req.params;
    const body = req.body;
    res.json({
        userId,
        message: 'Update User',
        body
    });
});

// DELETE
router.patch('/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({
        message: `Delete User ${userId}`,
    });
});

module.exports = router;
