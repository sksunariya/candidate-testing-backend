const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Groups = require('./groups');
const Profiles = require('./profiles');

const Group_Profiles = sequelize.define('Group_Profiles', {
  group_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Groups,
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

module.exports = Group_Profiles;
