const getPostService = require('../services/getPostService');

const getAllGetPost = async (_req, res) => {
    const getPost = await getPostService.getAllGetPost();
    return res.status(200).json(getPost);
  };
  
  module.exports = {
    getAllGetPost,
  };