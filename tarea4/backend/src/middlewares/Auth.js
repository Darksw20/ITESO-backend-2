
const authToken = (req, res, next) => {
    const authorization = req.headers.token;
    if (!authorization || authorization !== '123456') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}

module.exports = { authToken };