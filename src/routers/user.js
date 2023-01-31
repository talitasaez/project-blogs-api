const express = require('express');
const userController = require('../controllers/userController');
const userValidate = require('../middlewares/userValidate');
const { tokenValidate } = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/', userValidate, userController.postUser);
router.get('/', tokenValidate, userController.getAllUser);
router.get('/:id', tokenValidate, userController.getUserById);

module.exports = router;