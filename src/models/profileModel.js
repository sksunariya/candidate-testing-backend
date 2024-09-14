const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Profile = sequelize.define('Profile', {
  link: { type: DataTypes.STRING },
  url: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  last_activity: { type: DataTypes.DATE },
  earned: { type: DataTypes.DECIMAL(10, 2) },
  rate: { type: DataTypes.DECIMAL(5, 2) },
  total_hours: { type: DataTypes.INTEGER },
  in_progress: { type: DataTypes.BOOLEAN, defaultValue: false },
  invited_at: { type: DataTypes.DATE },
  shortname: { type: DataTypes.STRING(100) },
  recno: { type: DataTypes.INTEGER },
  agencies: { type: DataTypes.TEXT },
  total_revenue: { type: DataTypes.DECIMAL(10, 2) },
  member_since: { type: DataTypes.DATE },
  vanity_url: { type: DataTypes.STRING },
  skills: { type: DataTypes.TEXT },
  updated_at: { type: DataTypes.DATE },
  created_at: { type: DataTypes.DATE },
  process: { type: DataTypes.TEXT }
});

module.exports = Profile;
