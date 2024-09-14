const express = require('express');
const { getProfileTags, addProfileTag, removeProfileTag } = require('../controllers/profileTagController');
const router = express.Router();

router.get('/', getProfileTags); 
router.post('/', addProfileTag); 
router.delete('/', removeProfileTag);

module.exports = router;
