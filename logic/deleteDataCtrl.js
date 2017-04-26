const db = require('../db.js');

module.exports={
    pending_friends: function(req, res){
        db.deletePendingFriends([req.query.inviter, req.query.invited], function(err, succ){
            console.log(err, succ);
        })
    }
}
