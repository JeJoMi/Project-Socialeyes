const db = require('../db.js');

module.exports = {

  updateProfile: (req, res, next) => {
    console.log(req.user);
    let {firstName, lastName, gender, interests, eventTypes, photo} = req.body
    db.updateUserInfo([firstName, lastName, gender, interests, eventTypes, photo, req.user._json.email], function(err, profile) {
      console.log(profile, err);
      return res.status(200).send(profile)
    })
  }

//   createEvent: (req, res, next) => {
//     let {description, createdAt, eventDate, eventName, createdBy, eventTypes} = req.body
//     db.createEvent([description, createdAt, eventDate, eventName, createdBy, eventTypes], function(err, event) {
//
// })
//   }

}
