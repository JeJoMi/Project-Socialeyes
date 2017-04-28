app.controller('profileCtrl', [
	'$scope',
	'$state',
	'profileSrvc',
	function ( $scope, $state, profileSrvc ) {
		angular.element(document).ready(function(){
			$('.tooltipped').tooltip({delay: 50});
		})
		profileSrvc.getProfile( $state.params.id ).then(x => {
			$scope.profile = x.data
		}, err => console.log( err ))

		$scope.addFriend=function(receiver, sender){
			let obj = {sender, receiver}
			profileSrvc.addFriend(obj)
		}


	}
])
