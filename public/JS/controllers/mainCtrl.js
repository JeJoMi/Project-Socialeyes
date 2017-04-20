app.controller('mainCtrl', [
	'$scope',
	'mainSrvc',
	function ( $scope, mainSrvc ) {
		$(".dropdown-button").dropdown()

		mainSrvc.getUser( ).then(x => {
			$scope.user = x.data
		}, err => console.log( err ))

		$scope.logout=function(){
			console.log('hitting me');
			$scope.user=undefined
			mainSrvc.logout().then(x=>location.reload())
		}
	}
])
