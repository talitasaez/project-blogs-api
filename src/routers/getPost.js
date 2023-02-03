const express = require('express');
const getPostController = require('../controllers/getPostController');
const { tokenValidate } = require('../middlewares/tokenValidate');

const router = express.Router();

router.get('/', tokenValidate, getPostController.getAllGetPost);

module.exports = router;    