const express = require('express');
const UsersService = require('../services/users.service');
const router = express.Router();
const service = new UsersService();

// GET
router.get('/', (req, res) => {
    const users = service.find();
    res.json(users);
})

router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const user = service.findOne(userId);
    res.json(user);
});

// POST
router.post('/', (req, res) => {
    const user = req.body;
    service.create(user)
    res.json({
        message: 'Created User',
        body: user
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
