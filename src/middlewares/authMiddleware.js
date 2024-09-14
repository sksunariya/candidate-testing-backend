const jwt = require('jsonwebtoken');

// verifying the JWT token 
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

//  role-based authorization 
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied. You do not have permission to perform this action.' });
        }
        next();
    };
};

module.exports = { authenticateToken, authorizeRoles };
