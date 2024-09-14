const express = require('express');
const { getLinks, getLinkById, createLink, updateLink, deleteLink } = require('../controllers/linkController');
const router = express.Router();

router.get('/', getLinks);   
router.get('/:id', getLinkById);
router.post('/', createLink); 
router.put('/:id', updateLink); 
router.delete('/:id', deleteLink);

module.exports = router;
