const post_category = (sequelize,DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreingkey: true 
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreingkey: true 
    },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }
  return PostCategory;
 };
 
 module.exports = post_category;