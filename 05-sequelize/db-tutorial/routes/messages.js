const express = require('express');
// {Message: class ...}
// const Message = require('../models').Message
const { Message } = require('../models');

const messagesRouter = express.Router();

// /api/message/
// /api/message/:id/
messagesRouter.get('/', async function(req, res) {
    const messages = await Message.findAll();
    res.json(messages);
});

module.exports = messagesRouter;