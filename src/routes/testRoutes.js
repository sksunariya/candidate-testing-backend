const express = require('express');
const { getTests, getTestById, createTest, updateTest, deleteTest } = require('../controllers/testController');
const router = express.Router();

router.get('/', getTests); 
router.get('/:id', getTestById); 
router.post('/', createTest); 
router.put('/:id', updateTest); 
router.delete('/:id', deleteTest); 

module.exports = router;
