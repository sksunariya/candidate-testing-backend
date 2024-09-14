const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tests = require('./tests');
const Profiles = require('./profiles');

const Tests_Profile = sequelize.define('Tests_Profile', {
  test_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tests,
      key: 'id'
    },
    primaryKey: true
  },
  profile_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Profiles,
      key: 'id'
    },
    primaryKey: true
  }
}, {
  timestamps: false
});

module.exports = Tests_Profile;
