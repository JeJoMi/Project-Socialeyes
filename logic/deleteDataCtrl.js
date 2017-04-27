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
      db.deleteFriends([req.query.user2, req.query.user1], function (err, deletedFriend) {
        console.log(err, deletedFriend);
      })
    },

    deleteMessages: function(req, res, next) {
      console.log('*************', req.query);
      db.deleteMessage([req.query.senders_email, req.query.receivers_email, req.query.message], function(err, deletedMessage) {
        console.log(err, deletedMessage);
      })
    }
}
