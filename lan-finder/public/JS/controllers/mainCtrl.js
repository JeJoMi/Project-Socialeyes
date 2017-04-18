app.controller('mainCtrl', [
	'$scope',
	'mainSrvc',
	function ( $scope, mainSrvc ) {
		mainSrvc.getUser( ).then(x => {
			$scope.user = x.data
		})
	}
])
