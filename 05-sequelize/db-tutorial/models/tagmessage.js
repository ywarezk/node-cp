'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagMessage = sequelize.define('TagMessage', {
    messageId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  TagMessage.associate = function(models) {
    // associations can be defined here
  };
  return TagMessage;
};