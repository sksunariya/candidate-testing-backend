const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Templated = sequelize.define('Templated', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  template: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Templated;
