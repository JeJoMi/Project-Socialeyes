const db = require('../db.js');

module.exports = {
    // user: function(req,res) {
    //   if(req.user) {
    //     res.send(req.user._json)
    //   }
    // }
        user: (req, res, next) => {
          if (req.user) {
            db.getUser([req.user._json.email], (err, users) => {
              console.log(users,'++++++++++++++++++',err);
              res.send(users)
            })
          }
        }

}
