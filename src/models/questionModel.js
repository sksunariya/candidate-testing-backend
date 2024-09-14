const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Question = sequelize.define('Question', {
  question: { type: DataTypes.TEXT, allowNull: false },
  answer_type: { type: DataTypes.ENUM('textarea', 'radiobutton', 'multiinput'), allowNull: false },
  answer_html: { type: DataTypes.TEXT },
  correct: { type: DataTypes.STRING }, // Comma-separated string
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Question;
