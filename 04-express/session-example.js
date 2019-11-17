const express = require('express');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
var csrf = require('csurf')

const app = express();

var csrfProtection = csrf({ cookie: true })

app.use()

app.use(session({
    store: new FileStore({}),
    secret: 'hello',
}));

app.get('/', function(req, res) {
    req.session.name = 'yariv';
    res.send('saved name');
});

app.get('/login', function(req, res) {
    res.send(req.session.name);
});

app.post('/restricted', csrfProtection, function(req, res) {

})

app.listen(3000, function() {
    console.log('will be called once when listening is successfull');
});