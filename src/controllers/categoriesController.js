const categoriesService = require('../services/categoriesService');

const postCategories = async (req, res) => {
  const { name } = req.body;
  const { message } = await categoriesService.postCategories(name);
  return res.status(201).json(message);
};
const getAllCategories = async (_req, res) => {
    const categories = await categoriesService.getAllCategories();
    return res.status(200).json(categories);
  };
  
  module.exports = {
    postCategories,
    getAllCategories,
  };