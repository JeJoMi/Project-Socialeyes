const db = require('../db.js');

module.exports = {

  updateProfile: (req, res, next) => {
    console.log(req.user);
    let {firstName, lastName, gender, interests, eventTypes} = req.body
    db.updateUserInfo([firstName, lastName, gender, interests, eventTypes, req.user._json.email], function(err, profile) {
      console.log(profile, err);
      return res.status(200).send(profile)
    })
  }

}
