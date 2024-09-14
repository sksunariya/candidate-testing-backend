const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Group = sequelize.define('Group', {
  name: { type: DataTypes.STRING, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Group;
