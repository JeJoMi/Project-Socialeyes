app.service('mainSrvc', ['$http', function($http){
    this.getUser = function(){
        return $http.get('getDataFrom/user')
    }
    this.logout=function(){
        return $http.get('/logout')
    }
    this.rsvp = function(obj){
        return $http.post('/postdatato/join_events',obj)
    }
    this.sendMessage = function(obj){
        return $http.post('/postdatato/messages',obj)
    }
}])
