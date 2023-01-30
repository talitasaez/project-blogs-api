const Joi = require('joi');

const userValidate = (user) => Joi.object({
    displayName: Joi.string().min(8).required().messages({
        'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().required().messages({
        'string.min': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
    }),
    image: Joi.string().optional(),
}).validate(user);

module.exports = userValidate;