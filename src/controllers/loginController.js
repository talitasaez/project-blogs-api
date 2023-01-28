const { tokenGeneration } = require('../utils/jwt');
const loginService = require('../services/loginService');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const login = await loginService.postLogin(email, password);
   if (!login) return res.status(400).json({ message: 'Invalid fields' });

   const token = tokenGeneration({ email, password });
   res.status(200).send({ token });
};

  module.exports = {
    postLogin,

  };