const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Groups = require('./groups');
const Tests = require('./tests');

const Group_Tests = sequelize.define('Group_Tests', {
  group_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Groups,
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
  }
}, {
  timestamps: false
});

module.exports = Group_Tests;
