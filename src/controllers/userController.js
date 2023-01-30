const { tokenGeneration } = require('../utils/jwt');
const userValidate = require('../middlewares/userValidate');
const getUserEmail = require('../middlewares/getUserEmail');
const userService = require('../services/userService');

const postUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { error } = userValidate({ displayName, email, password, image });
    if (error) return res.status(400).json({ message: error.mesage });

    const userRegistered = await getUserEmail(email);
    if (userRegistered) return res.status(409).json({ message: 'User already registered' });

    const user = await userService.useCreate(displayName, email, password, image);

    const payload = {
        user: user.displayName,
    };

    const token = tokenGeneration(payload);
    return res.status(201).json({ token });
};

  module.exports = {
    postUser,

  };