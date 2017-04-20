const db = require('../db.js');

module.exports = {
        user: (req, res, next) => {
          if (req.user) {
            db.getUser([req.user._json.email], (err, users) => {
              console.log(users,'++++++++++++++++++',err);
              res.send(users)
            })
          }
        }

}
