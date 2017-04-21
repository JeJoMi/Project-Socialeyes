const db = require('../db.js');

module.exports = {
        user: (req, res, next) => {
          if (req.user) {
            db.getUser([req.user._json.email], (err, users) => {
              db.getEventByUserEmail([users[0].email], (err, event) => {
                console.log(event);
                users[0].hostedEvents = event
                db.getUsersAttendedEvents([users[0].email], (err, attendedEvents) => {
                  users[0].events = attendedEvents
                  console.log(users[0]);
                  db.getMessagesByUserEmail([users[0].email], (err, receivedMessage) => {
                    console.log(err);
                    users[0].messages = receivedMessage
                    db.getFriends([users[0].email], (err, currentFriends) => {
                      users[0].friends = currentFriends
                      res.send(users)
                    });
                  });
                });
              });
            });
          }
        }

}
