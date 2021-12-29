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

// router.get('/:userId', (req, res) => {

// });

// POST
router.post('/', (req, res) => {
    controller.addUser(req.body)
        .then((user) =>{
            response.success(req, res, user, 201)
        })
        .catch((err) => {
            response.error(req, res, err, 400, 'empty fields')
        })
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

// // DELETE
// router.patch('/:userId', (req, res) => {
//     const { userId } = req.params;
//     res.json({
//         message: `Delete User ${userId}`,
//     });
// });

module.exports = router;
