const { User } = require('../models');

const useCreate = async (displayName, email, password, image) => {
  const user = User.create({ displayName, email, password, image });
  return user;
};

module.exports = { useCreate };