const { Category } = require('../models');

const postCategories = async (name) => {
const categories = await Category.create({ name });
return { type: null, message: categories };
};

module.exports = { postCategories };