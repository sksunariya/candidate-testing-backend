const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Queries = sequelize.define('Queries', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  query: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Queries;
