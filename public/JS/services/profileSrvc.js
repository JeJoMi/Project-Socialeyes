app.service('profileSrvc', ['$http',function($http){
    this.getProfile = function(id){
        return $http.get('/getDataFrom/profile/'+id)
    }
    this.addFriend = function(obj){
        return $http.post('/postdatato/')
    }
}])
