module.exports = {
    user: function(req,res){
        res.send(req.user._json)
    }
}
