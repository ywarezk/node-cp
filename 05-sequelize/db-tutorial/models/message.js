'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message',  {
    title: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    userId: DataTypes.INTEGER    
  }, {});
  Message.associate = function(models) {
    // associations can be defined here

    Message.belongsTo(models.User);

    Message.belongsToMany(models.Tag, {
      through: {
        model: models.TagMessage
      }
    });
  };
  return Message;
};