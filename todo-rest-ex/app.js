
const express = require('express');
const todoService = require('./todo.service');

const app = express();

app.use(express.json());

// get all tasks
app.route('/api/task/')
    .get(function(req, res) {
        res.status(200).json(todoService.getTasks());
    })
    .post(function(req, res) {
        const task = todoService.addTask(req.body);
        res.status(201).json(task);
    });


// app.listen(3000, function() {
//     console.log('listening...')
// })

module.exports = app;