const express = require('express');
const { getTags, getTagById, createTag, updateTag, deleteTag } = require('../controllers/tagController');
const router = express.Router();

router.get('/', getTags);  
router.get('/:id', getTagById);
router.post('/', createTag); 
router.put('/:id', updateTag); 
router.delete('/:id', deleteTag); 

module.exports = router;
