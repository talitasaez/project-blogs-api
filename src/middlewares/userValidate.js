const userValidate = (req, res, next) => {
    const { displayName, email, password } = req.body;

    const regex = /^\w+@[a-zA-Z_]+?/;
if (displayName.length < 9) {
    return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
    });
}
if (!regex.test(email)) {
    return res.status(400).json({
        message: '"email" must be a valid email',
    });
}
if (password.length < 6) {
    return res.status(400).json({
        message: '"password" length must be at least 6 characters long',
    });
}
return next();
};

module.exports = userValidate;