const { User } = require('../models');

const postUser = async (displayName, email, password, image) => {
  const user = await User.findOne({
      where: { email } });
      if (user) return { type: 400, message: 'User already registered' };
      if (image) {
        await User.create({ displayName, email, password, image });
        return { type: null };
      }
      await User.create({ displayName, email, password });
      return { type: null };
    };
    const getAllUser = async () => {
      const user = await User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
      });
      return user;
    };
    const getUserById = async (id) => {
      const user = await User.findOne({ where: { id },
         attributes: { exclude: ['password'] },
        });
      if (!user) return { type: 404, message: 'User does not exist' };
      return { type: null, message: user };
    };
    
    module.exports = { 
      postUser,
      getAllUser,
      getUserById,
     };