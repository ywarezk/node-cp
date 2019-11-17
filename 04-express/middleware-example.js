const express = require('express');

const app = express();

// /user/hello
// /api
app.use('/api', function(req, res, next) {

})

app.get('/hello', function(req, res) {

})

app.get(/^hello\/[0-9]+/, function(req, res) {

});

app.post(['/admin', /^stam/], function(req, res) {

});

app.all('/admin', function() {

})

app.get('/api/user/:id', function(req, res) {
    res.send(req.params.id);
});

// /search?q=hello
app.get('/search', function(req, res) {
    res.send(req.query.q);
});

app.listen(3000, function() {
    console.log('listening');
})