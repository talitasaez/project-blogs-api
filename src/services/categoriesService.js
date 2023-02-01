const { Category } = require('../models');

const postCategories = async (name) => {
const categories = await Category.create({ name });
return { type: null, message: categories };
};
const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
  };

module.exports = { 
    postCategories,
    getAllCategories,
 };