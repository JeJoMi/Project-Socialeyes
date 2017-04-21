const db = require('../db.js');

module.exports = {
        user: (req, res, next) => {
          if (req.user) {
            db.getUser([req.user._json.email], (err, users) => {
              db.getEventByUserEmail([users[0].email], (err, event) => {
                console.log(event);
                users[0].hostedEvents = event
                db.getUsersAttendedEvents([users[0].email], (err, attended) => {
                  users[0].events = attended
                  console.log(users[0]);
                  db.getMessageByUserEmail([users[0].email], (err, receivedMessage) => {
                    users[0].messages = receivedMessage
                    res.send(users)
                  })
                })
              })
            })
          }
        }

}
