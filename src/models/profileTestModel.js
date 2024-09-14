const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Profiles = require('./profiles');
const Tests = require('./tests');

const Profile_Test = sequelize.define('Profile_Test', {
  profile_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Profiles,
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

module.exports = Profile_Test;
