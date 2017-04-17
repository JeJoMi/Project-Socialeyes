const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const cors = require('cors');
const keys = require('./keys');
const port = 3001;

const app = express()

const loginCtrl = require('./logic/loginController');

app.use(cors())
app.use(session({
    secret:keys.sessionSecret
}))
app.use(passport.initialize());
app.use(passport.session())
app.use(express.static('./build'))

// ##################################################
// #################################################
// ##################################################
passport.use(new FacebookStrategy({
    clientID: keys.FBAppId,
    clientSecret: keys.FBSecret,
    callbackURL: 'http://localhost:3001/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
    return done(null, profile);
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


app.get('/auth/facebook',passport.authenticate('facebook'))

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/currentUser',
                                      failureRedirect: '/login' }));
// ##################################################
// #################################################
// ##################################################


app.get('/',(req,res)=>console.log('hello world'))
app.listen(port, ()=>console.log(`listening on ${port}`))
