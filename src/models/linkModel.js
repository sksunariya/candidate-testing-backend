const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Tag = require('./Tag');

const Link = sequelize.define('Link', {
  tag_id: {
    type: DataTypes.INTEGER,
    references: { model: Tag, key: 'id' }
  },
  link: { type: DataTypes.STRING, allowNull: false },
  active: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = Link;
