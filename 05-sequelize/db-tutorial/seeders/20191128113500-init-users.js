'use strict';

const {User, Message} = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await User.bulkCreate([
      {
        firstName: 'Yariv'
      },
      {
        firstName: 'Katz'
      }
    ]);

    const messages = await Message.findAll()
    for(let message of messages) {
      await message.update({userId: 1})
    }

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
