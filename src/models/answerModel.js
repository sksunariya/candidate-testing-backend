const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Test = require('./Test');
const Question = require('./Question');
const Profile = require('./Profile');

const Answer = sequelize.define('Answer', {
  test_id: {
    type: DataTypes.INTEGER,
    references: { model: Test, key: 'id' }
  },
  question_id: {
    type: DataTypes.INTEGER,
    references: { model: Question, key: 'id' }
  },
  profile_id: {
    type: DataTypes.INTEGER,
    references: { model: Profile, key: 'id' }
  },
  answer: { type: DataTypes.TEXT },
  user_agent: { type: DataTypes.STRING },
  ip: { type: DataTypes.STRING(45) },
  copypaste: { type: DataTypes.ENUM('copy', 'paste', 'right click') },
  inactive: { type: DataTypes.BOOLEAN, defaultValue: false },
  is_correct: { type: DataTypes.BOOLEAN },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Answer;
