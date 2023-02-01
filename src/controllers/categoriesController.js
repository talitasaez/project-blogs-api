const categoriesService = require('../services/categoriesService');

const postCategories = async (req, res) => {
  const { name } = req.body;
  const { message } = await categoriesService.postCategories(name);
  return res.status(201).json(message);
};
  
  module.exports = {
    postCategories,

  };