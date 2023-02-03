const { User, BlogPost, Category } = require('../models');

const getAllGetPost = async () => {
const getPost = await BlogPost.findAll({ 
    // attributes: { exclude: ['userId'] },
    include: [{ 
        model: User, as: 'user', attributes: { exclude: 'password' },
     },
       {
         model: Category, as: 'categories',
        },
        ],
     });
return getPost;
};

module.exports = { 
    getAllGetPost,
 };