const { Message, User } = require('../models');

module.exports = {
    Message: {
        user: (message, args) => {
            return User.findByPk(message.userId);
        },
        tags: (message) => {
            return message.getTags();
        }
    },

    User: {
        messages: (user) => {
            return user.getMessages()
        }
    },

    Tag : {
        messages: (tag) => {
            return tag.getMessages()
        }
    },

    Query: {
        findOne: (parent, params) => {
            return Message.findByPk(params.id)
        },
        findAll: () => {
            return Message.findAll();
        },
        findUsers: () => {
            return User.findAll();
        }
    },

    Mutation: {
        create: (parent, args) => {
            return Message.create(args);
        },

        update: async (parent, args) => {
            const message = await Message.findByPk(args.id);
            return message.save(args);        
        },

        delete: async (parent, args) => {
            const message = await Message.findByPk(args.id);
            await message.destroy();        
        }
    }
}