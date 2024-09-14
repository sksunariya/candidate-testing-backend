const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Questions = require('./questions');
const Tests = require('./tests');

const Questions_Tests = sequelize.define('Questions_Tests', {
  question_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Questions,
      key: 'id'
    },
    primaryKey: true
  },
  test_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tests,
      key: 'id'
    },
    primaryKey: true
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Questions_Tests;
