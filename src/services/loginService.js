const { User } = require('../models');

const postLogin = async (email, password) => {

const userLogin = await User.findOne({ 
    where: { email, password },
});
  if (!userLogin) return { type: 'error', message: 'Invalid fields' };

  return { type: null };

};

module.exports = {
postLogin,
};