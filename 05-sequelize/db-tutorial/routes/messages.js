const express = require('express');
// {Message: class ...}
// const Message = require('../models').Message
const { Message, Tag } = require('../models');

const messagesRouter = express.Router();

// /api/message/
// /api/message/:id/
messagesRouter.route('/')
    .get(async function(req, res) {
        const messages = await Message.findAll({
            include: [
                Tag
            ]
        });
        res.json(messages);
    })
    .post(async function(req, res) {
        // {title: '...'}
        try {
            const message = await Message.create(req.body);
            res.status(201).json(message);
        } catch(err) {
            res.status(400).json({error: err.message});
        }
        
    });

messagesRouter.route('/:id/')
    .get(async function(req, res) {
        const message = await Message.findByPk(req.params.id)
        res.json(message);
    })
    .delete(async function(req, res) {
        const message = await Message.findByPk(req.params.id);
        await message.destroy();
        res.status(204).json();
    })
    .put(async function(req, res) {
        const message = await Message.findByPk(req.params.id);
        await message.save(req.body);
        res.status(202).json(message);
    })





module.exports = messagesRouter;