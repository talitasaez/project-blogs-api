const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const { JWT_SECRET } = process.env;

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.postLogin(email, password);
  if (type) return res.status(400).json({ message });

  const payload = {
    email,
  };
  
  const token = jwt.sign(payload, JWT_SECRET);
  
  return res.status(200).json({ token });
  };
  
  module.exports = {
    postLogin,

  };