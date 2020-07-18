'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    User.hasMany(models.Message);
  };
  return User;
};