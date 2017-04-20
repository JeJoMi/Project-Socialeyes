app.controller('mainCtrl', [
	'$scope',
	'$location',
	'mainSrvc',
	function ( $scope, $location, mainSrvc ) {
		function capitalizeFirstLetter( string ) {
			return string.charAt( 0 ).toUpperCase( ) + string.slice( 1 );
		}

		mainSrvc.getUser( ).then(x => {
			x.data[0].first_name = capitalizeFirstLetter(x.data[0].first_name)
			x.data[0].last_name = capitalizeFirstLetter(x.data[0].last_name)
			$scope.user = x.data[0]
			$( ".dropdown-button" ).dropdown( )

		}, err => console.log( err ))

		$scope.logout = function ( ) {
			console.log( 'hitting me' );
			$scope.user = undefined
			mainSrvc.logout( ).then(x => location.reload( ))
		}
	}
])
