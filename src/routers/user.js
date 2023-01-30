const express = require('express');
const userController = require('../controllers/userController');
// const loginValidate = require('../middlewares/loginValidate');
const userValidate = require('../middlewares/userValidate');

const router = express.Router();

router.post('/', userValidate, userController.postUser);

module.exports = router;