const { User } = require('../models');

const postLogin = async (email, password) => {
const user = await User.findOne({
    where: { email, password } });
    if (!user) return { type: 'error', message: 'Invalid fields' };
    return { type: null, message: '' };
};
module.exports = { postLogin };