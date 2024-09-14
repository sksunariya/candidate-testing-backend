const express = require('express');
const { getProfiles, getProfileById, createProfile, updateProfile, deleteProfile } = require('../controllers/profileController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');
const { validateProfileCreation } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getProfiles); 
router.get('/:id', authenticateToken, getProfileById);
router.post('/', authenticateToken, authorizeRoles('admin'), validateProfileCreation, createProfile); 
router.put('/:id', authenticateToken, authorizeRoles('admin'), updateProfile); 
router.delete('/:id', authenticateToken, authorizeRoles('admin'), deleteProfile); 

module.exports = router;
