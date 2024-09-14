const express = require('express');
const { getGroupProfiles, addGroupProfile, removeGroupProfile } = require('../controllers/groupProfileController');
const router = express.Router();

router.get('/', getGroupProfiles); 
router.post('/', addGroupProfile); 
router.delete('/', removeGroupProfile); 

module.exports = router;
