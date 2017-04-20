const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const cors = require('cors');
const getDataRoutes = require('./routes/getDataRoutes');
const postDataRoutes = require('./routes/postDataRoutes');
const keys = require('./keys');
const logout = require('express-passport-logout')

const aws = require('./s3.js')

const massive = require('massive');

const port = 3000;

const db = require('./db');
// console.log(db);

const app = express()

const loginCtrl = require('./logic/loginController');

app.use(bodyParser.json())
app.use(cors())
app.use(session({
  secret: keys.sessionSecret,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session())
app.use(express.static('./public'))

app.use('/getDataFrom', getDataRoutes)
app.use('/postDataTo', postDataRoutes)

app.get('/s3_signed_url', aws.getSignedUrl)

app.get('/logout', function(req,res){
    console.log('hitting me too');
    logout()
    req.session.destroy()
})

// ##################################################
// #################################################
// ##################################################
passport.use(new FacebookStrategy({
  clientID: keys.FBAppId,
  clientSecret: keys.FBSecret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'email']
}, function(token, refreshToken, profile, done) {
  db.createUser([profile._json.email],(err, profile) =>
  console.log(err, '+++++++++++++++++++++++', profile))
  return done(null, profile);
}));
passport.serializeUser(function(user, done) {
  console.log(user, 'serial');
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}))

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/#!/home',
  failureRedirect: '/'
}));
// ##################################################
// #################################################
// ##################################################


app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})


app.listen(port, () => console.log(`listening on ${port}`))
