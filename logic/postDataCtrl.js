const db = require('../db.js');

module.exports = {

  updateProfile: (req, res, next) => {
    console.log(req.user);
    let {
      firstName,
      lastName,
      gender,
      interests,
      eventTypes,
      photo
    } = req.body
    db.updateUserInfo([
      firstName,
      lastName,
      gender,
      interests,
      eventTypes,
      photo,
      req.user._json.email
    ], function(err, profile) {
      console.log(profile, err);
      return res.status(200).send(profile)
    })
  },

  createEvent: (req, res, next) => {
    console.log(req.body);
    let {
      date,
      title,
      desc,
      user,
      type,
      address,
      photo
    } = req.body
    db.createEvent([
      date,
      title,
      desc,
      user,
      type,
      address,
      photo
    ], function(err, createdEvent) {
      // console.log(createdEvent, err);
      db.addEventAttendance([createdEvent[0].id, user], function(err, attendance) {
        // console.log(err, '############', attendance);
      })
    })
  },

  createNewMessage: (req, res, next) => {
    let {
      sender,
      receiver,
      message
    } = req.body
    db.createMessage([sender, receiver, message], function(err, newMessage) {
      // console.log(err, '$$$$$$$$$$$$', newMessage);
      res.send(newMessage)
    })
  },

  // createAlbum: (req, res, next) => {
  //   let {
  //     userEmail,
  //     description,
  //     photoUrl
  //   } = req.body
  //   db.createAlbum([userEmail, description, photoUrl], function(err, newAlbum) {
  //     console.log(err, '@@@@@@@@@@@', newAlbum);
  //     res.send(newAlbum)
  //   })
  // },

  addFriend: (req, res, next) => {
    db.addFriend([req.body.sender, req.body.receiver], function(err, newFriend) {
      console.log(err, newFriend);
      res.send(newFriend)
    })
  }

}
