const { User } = require('../models');

const postLogin = async (email, password) => 
 User.findOne({ where: { email, password } });

module.exports = { postLogin };