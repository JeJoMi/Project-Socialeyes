app.controller('mainCtrl', [
	'$scope',
	'mainSrvc',
	function ( $scope, mainSrvc ) {

		// For the carousel on the landing page
		// FIXME: Get carosel to display every time page reloads 
		$( document ).ready( function ( ) {
			$( '.carousel.carousel-slider' ).carousel({ fullWidth: true });
		})

		mainSrvc.getUser( ).then(x => {
			$scope.user = x.data
		},err=>console.log(err))
	}
])