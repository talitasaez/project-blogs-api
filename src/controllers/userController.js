const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const { JWT_SECRET } = process.env;

const postUser = async (req, res) => {
    const { displayName, email, image } = req.body;
    const { type, message } = await userService.postUser(displayName, email, image);

    if (type) return res.status(409).json({ message });
 
    const payload = {
        displayName, 
        email, 
        image,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return res.status(201).json({ token });
};
   const getAllUser = async (_req, res) => {
     const user = await userService.getAllUser();
     return res.status(200).json(user);
   };
   const getUserById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userService.getUserById(id);
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  };

  module.exports = {
    postUser,
    getAllUser,
    getUserById,
  };