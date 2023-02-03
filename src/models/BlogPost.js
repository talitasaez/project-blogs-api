
const Blog_posts = (sequelize, DataTypes) => {
    const BlogPost  =  sequelize.define('BlogPost', {
     id: {
       type:  DataTypes.INTEGER,
       primaryKey: true, 
       autoIncrement:true,
     }, 
     title: DataTypes.STRING,
     content: DataTypes.STRING,
     userId: {
        type: DataTypes.INTEGER,
        foreignKey: true },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    
    {
     tableName: 'blog_posts',
     underscored: true,
     timestamps: false, 
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId',
        });
    }
  return BlogPost;
 };
 
 module.exports = Blog_posts;