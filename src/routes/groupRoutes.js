const express = require('express');
const { getGroups, getGroupById, createGroup, updateGroup, deleteGroup } = require('../controllers/groupController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');
const { validateGroupCreation } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getGroups);  
router.get('/:id', authenticateToken, getGroupById); 
router.post('/', authenticateToken, authorizeRoles('admin'), validateGroupCreation, createGroup); 
router.put('/:id', authenticateToken, authorizeRoles('admin'), updateGroup); 
router.delete('/:id', authenticateToken, authorizeRoles('admin'), deleteGroup);

module.exports = router;
