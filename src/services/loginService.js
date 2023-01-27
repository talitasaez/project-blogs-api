const { User } = require('../models');

const postLogin = async (email, password) => {
    const userLogin = await User.findOne({ 
        where: { email, password },
    });
    
      if (!userLogin) {
        return { type: 400, message: 'Invalid fields' };
      }
    
      return { type: null, message: '' };
};

module.exports = { postLogin };