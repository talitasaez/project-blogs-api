const { User, BlogPost, Category } = require('../models');

const getAllGetPost = async () => BlogPost.findAll(
  { include: [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: {
        attributes: [],
      },
    },
    ],
  },
);

module.exports = { 
    getAllGetPost,
 };