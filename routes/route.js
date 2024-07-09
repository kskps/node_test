const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers')

router.post('/', userController.createUser)

router.get('/:id', userController.getUserById)

router.get('/', userController.getAllUsers);

router.patch('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;