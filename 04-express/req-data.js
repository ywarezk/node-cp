/**
 * add data to the request object
 */

const express = require('express');

const app = express();

app.use(function(req, res, next) {
    if (req.headers['Authorization']) {
        req.user = 'Yariv katz';
    }
    next()
});

app.use(express.json());
app.use(express.urlencoded());

app.get('/admin', function(req, res) {
    res.send(req.user);
})

app.route('/login')
    .get(function(req, res) {
        res.send(`
            <form method="post" action="/login?hello=world">
                <input type="email" name="email" />
            </form>
        `)
    })
    .post(function(req, res) {
        // {email: ''}
        res.send(req.body.email);
    })



app.listen(3000, function() {
    console.log('listening...');
})