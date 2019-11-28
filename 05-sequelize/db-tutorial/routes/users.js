const express = require('express');
// {Message: class ...}
// const Message = require('../models').Message
const { User, Message } = require('../models');

const userRouter = express.Router();

// /api/user/
userRouter.route('/')
    .get(async function(req, res) {
        const users = await User.findAll({
            include: [
                {
                    model: Message,
                    attributes: ['id']
                }
                
            ]
        });
        res.json(users);
    });
    
module.exports = userRouter;