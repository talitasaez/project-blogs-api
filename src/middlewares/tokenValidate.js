const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenValidate = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const user = jwt.verify(authorization, JWT_SECRET);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    tokenValidate,
};
