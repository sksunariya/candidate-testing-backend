const express = require('express');
const { getQueries, getQueryById, createQuery, updateQuery, deleteQuery } = require('../controllers/queryController');
const router = express.Router();

router.get('/', getQueries); 
router.get('/:id', getQueryById);
router.post('/', createQuery); 
router.put('/:id', updateQuery); 
router.delete('/:id', deleteQuery);

module.exports = router;
