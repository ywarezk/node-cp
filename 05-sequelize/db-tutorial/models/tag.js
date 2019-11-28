'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    title: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here

    Tag.belongsToMany(models.Message, {
      through: {
        model: models.TagMessage
      }
    });
  };
  return Tag;
};