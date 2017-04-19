app.controller('userController', ['$scope','userService', function($scope, userService){
    // FIXME: Add ability to add photos to this
    $scope.submitProfile = function(firstName, lastName, interests, gender, eventTypes){
        let eventTypesArr=[]
        for(let event in eventTypes){
            if(eventTypes[event]){
                eventTypesArr.push(event)
            }
        }
        let obj = {
            firstName, lastName, interests, eventTypes:eventTypesArr, gender
        }
        userService.submitProfile(obj).then(x=>{
          console.log(x);
        },err=>{
          console.log(err);
        })
    }
}])
