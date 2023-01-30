const { User } = require('../models');

const getUserEmail = async (email) => {
const user = await User.findOne({
     where: { email },
     attributes: { exclude: ['password'] },
     });
     return user;
};

module.exports = { getUserEmail };