/**
 * middleware creator
 */

 const express = require('express');
 const helloMiddleware = require('./hello-middleware');

 const app = express();

 app.get('/', helloMiddleware('Yariv'))

 app.listen(3000, function() {
     console.log('listening');
 })