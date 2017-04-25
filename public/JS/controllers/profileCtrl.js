app.controller('profileCtrl', [
	'$scope',
	'$state',
	'profileSrvc',
	function ( $scope, $state, profileSrvc ) {

		profileSrvc.getProfile( $state.params.id ).then(x => {
			console.log( x );
			$scope.profile = x.data
		}, err => console.log( err ))



	}
])
