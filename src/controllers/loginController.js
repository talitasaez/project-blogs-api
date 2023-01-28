const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const { JWT_SECRET } = process.env;

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const login = await loginService.postLogin(email, password);
  const { type, message } = login;
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