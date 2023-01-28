const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const configJwt = {
    expireIn: '30d',
    algorithm: 'HS256',
};

const tokenGeneration = (payload) => {
    try {
      return jwt.sign(payload, JWT_SECRET, configJwt);
    } catch (error) {
        console.log(error.message);
        throw new Error('Failed to generate token');
    }
};

const tokenE = (token) => {
    if (!token) {
        throw new Error('Undefined Token');
    }
    try {
        const error = jwt.verify(token, JWT_SECRET);
        return error;
    } catch (e) {
        console.log(e.message);
        throw new Error('Invalid assignature');
    }
};

module.exports = {
    tokenGeneration,
    tokenE,
};