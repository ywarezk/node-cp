const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const session = require('express-session');
const jwt = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;

const users = [
    {id: 1, firstName: 'Yariv', email: 'yariv@nerdeez.com', password: '12345'},
    {id: 2, firstName: 'Pigletshvily', email: 'piglet@nerdeez.com', password: '12345678'},
    {id: 3, firstName: 'Sweetness', email: 'sweetness@nerdeez.com', password: 'acbdefg'},
];

passport.use(new LocalStrategy(function(email, password, done) {
    const user = users.find((singleUser) => singleUser.email === email && singleUser.password === password);
    if (user) {
        done(null, user)
    } else {
        done(null, false)
    }
}));

passport.use(new JwtStrategy({
    secretOrKey: 'secret',
    // Authorization: Bearer <token>
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, function(payload, done) {
    const userId = payload.userId;
    const user = users.find((singleUser) => singleUser.id === userId);
    done(null, user);
}));

/**
 * what passport will save in the session
 */
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

/**
 * when going to a restricted url
 * i will use this function and the session data
 * to populate req.user
 */
passport.deserializeUser(function(id, done) {
    const user = users.find((singleUser) => singleUser.id === id);
    done(null, user);
});

const app = express();

app.use(express.urlencoded());
app.use(session({
    secret: 'hello'
}))
app.use(passport.initialize());
app.use(passport.session());

app.route('/login')
    .get(function(req, res) {
        res.send(
            `
                <form method="post">
                    <input type="email" name="username" />
                    <input type="password" name="password" />
                    <button type="submit">Submit</button>
                </form>
            `
        )
    })
    .post(passport.authenticate('local', {
        session: true
    }), function(req, res) {
        res.send(jwt.sign({ userId: req.user.id }, 'secret'));
    });

// /dashboard/user

app.use('/dashboard', function(req, res, next) {
    if (req.user) {
        next();
        return;
    } else {
        res.send('you shall not pass!');
    }
})

app.get('/dashboard', 
    function(req, res) {
        res.send(`you are authenticated`);
    }
)

app.use('/api', passport.authenticate('jwt', {session: false}))

app.get('/api/todo/', function(req, res) {
    res.json([
        {id: 1, title: 'hello'},
        {id: 2, title: 'hello'},
        {id: 3, title: 'hello'},
    ])
});

module.exports = app.listen(3000, function() {
    console.log('listening');
})

