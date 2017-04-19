app.service('mainSrvc', ['$http', function($http){
    this.getUser = function(){
        return $http.get('getDataFrom/user')
    }
}])
