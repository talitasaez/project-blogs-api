const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/user', userController.postUser);

module.exports = router;