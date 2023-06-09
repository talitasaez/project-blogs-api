const express = require('express');
const loginController = require('../controllers/loginController');
const { loginValidate } = require('../middlewares/loginValidate');

const router = express.Router();

router.post('/', loginValidate, loginController.postLogin);

module.exports = router;