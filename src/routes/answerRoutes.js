const express = require('express');
const { getAnswers, getAnswerById, createAnswer, updateAnswer, deleteAnswer } = require('../controllers/answerController');
const router = express.Router();

router.get('/', getAnswers);              
router.get('/:id', getAnswerById);      
router.post('/', createAnswer);     
router.put('/:id', updateAnswer);       
router.delete('/:id', deleteAnswer);      

module.exports = router;
