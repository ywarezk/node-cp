const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.resolve(__dirname, 'assets')));

app.listen(3000, function() {
    console.log('listening...');
})