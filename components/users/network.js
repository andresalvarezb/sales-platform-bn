const response = require('../../network/response');
const express = require('express');
const router = express.Router();

const UsersController = require('./controller');
const controller = new UsersController();


// GET
router.get('/', (req, res) => {
    controller.getUsers()
        .then((listUsers) => {
            response.success(req, res, listUsers, 200);
        })
        .catch((err) => {
            response.error(req, res, 'Probably the list is empty', 500, err)
        })

})

router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    controller.getUser(userId)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, 'The ID is wrong', 500, err)
        })

})

// POST
router.post('/', (req, res) => {
    controller.addUser(req.body)
        .then((user) => {
            response.success(req, res, user, 201)
        })
        .catch((err) => {
            response.error(req, res, err, 400, 'empty fields')
        })
});

// PATCH
router.patch('/:userId', (req, res) => {
    const { userId } = req.params;
    controller.updateUser(userId, req.body)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 400)
        })
});


// DELETE
router.delete('/:userId', (req, res) => {
    const { userId } = req.params;
    controller.deleteUser(userId)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 400)
        })
});

module.exports = router;
