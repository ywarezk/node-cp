
const express = require('express');

const api = express();

const admin = express();

api.get('/', function(req, res, next) {
    res.send('hello world');
});

admin.get('/', function(req, res) {
    res.send('welcome to the admin')
});


api.use('/admin', admin);



api.listen(3000, function() {
    console.log('will be called once when listening is successfull');
});