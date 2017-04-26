const db = require('../db.js');

module.exports={
    pending_friends: function(req, res){
        db.deletePendingFriends([req.query.inviter, req.query.invited], function(err, succ){
            console.log(err, succ);
        })
    },

    deleteFriends: function(req, res, next) {
      db.deleteFriends([req.query.user1, req.query.user2], function (err, deletedFriend) {
        console.log(err, deletedFriend);
      })
      db.deleteFriends([req.query.user2, req.query.user3], function (err, deletedFriend) {
        console.log(err, deletedFriend);
      })
    }
}
