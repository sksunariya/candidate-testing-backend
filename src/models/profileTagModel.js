const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Profiles = require('./profiles');
const Tags = require('./tags');

const Profile_Tags = sequelize.define('Profile_Tags', {
  profile_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Profiles,
      key: 'id'
    },
    primaryKey: true
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tags,
      key: 'id'
    },
    primaryKey: true
  }
}, {
  timestamps: false
});

module.exports = Profile_Tags;
