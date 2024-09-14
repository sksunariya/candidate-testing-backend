const { body, validationResult } = require('express-validator');

// Middleware for validating profile creation request data
const validateProfileCreation = [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('A valid email is required.'),
    body('role').notEmpty().withMessage('Role is required.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware for validating group creation request data
const validateGroupCreation = [
    body('name').notEmpty().withMessage('Group name is required.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateProfileCreation, validateGroupCreation };
