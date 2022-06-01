const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/get-users', userController.getUser);

router.post('/add-users', userController.addUser);

router.delete('/delete-users/:id', userController.deleteUser);

module.exports = router;