app.service('eventsSrvc',['$http',function($http){
    this.getEvents = function(){
        return $http.get('/getDataFrom/events')
    }
}])
