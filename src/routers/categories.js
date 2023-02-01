const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const { categoriesValidate } = require('../middlewares/categoriesValidate');
const { tokenValidate } = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/', categoriesValidate, tokenValidate, categoriesController.postCategories);
router.get('/', tokenValidate, categoriesController.getAllCategories);

module.exports = router;