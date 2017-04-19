module.exports = {
    user: function(req,res){
      if(req.user){
        res.send(req.user._json)
      }
    }
}
