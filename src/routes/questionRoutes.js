const express = require('express');
const { getQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion } = require('../controllers/questionController');
const router = express.Router();

router.get('/', getQuestions);  
router.get('/:id', getQuestionById);
router.post('/', createQuestion);   
router.put('/:id', updateQuestion); 
router.delete('/:id', deleteQuestion);

module.exports = router;
