
const VALID_ROLES = ['admin', 'user'];

const authToken = (req, res, next) => {
    const token = req.query.token;
    if (token && token === '12345') {
        return next();
    }
    return res.status(401).json({ error: 'Unauthorized' });
}

const isValidRole = (req, res, next) => {
    const role = req.body.role;

    if (!role) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!VALID_ROLES.includes(role)) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    return next();
}

module.exports = { authToken, isValidRole };