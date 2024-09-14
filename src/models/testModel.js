const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Test = sequelize.define('Test', {
  name: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Test;
