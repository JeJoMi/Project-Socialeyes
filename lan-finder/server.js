const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const cors = require('cors');
const getDataRoutes = require('./routes/getDataRoutes');
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

app.use('/getDataFrom', getDataRoutes)


// ##################################################
// #################################################
// ##################################################
passport.use(new FacebookStrategy({
    clientID: keys.FBAppId,
    clientSecret: keys.FBSecret,
    callbackURL: 'http://localhost:3001/auth/facebook/callback',
    profileFields:['id','email']
}, function(token, refreshToken, profile, done) {
    console.log(profile, 'func');
    return done(null, profile);
}));
passport.serializeUser(function(user, done) {
    console.log(user, 'serial');
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
    console.log(obj, 'deserial');
  done(null, obj);
});


app.get('/auth/facebook',passport.authenticate('facebook',{scope:['email']}))

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/getDataFrom/user',
                                      failureRedirect: '/' }));
// ##################################################
// #################################################
// ##################################################

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/build/index.html')
})
app.listen(port, ()=>console.log(`listening on ${port}`))
