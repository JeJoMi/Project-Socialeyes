app.controller('mainCtrl', [
	'$scope',
	'$location',
	'mainSrvc',
	function ( $scope, $location, mainSrvc ) {
		function capitalizeFirstLetter( string ) {
			return string.charAt( 0 ).toUpperCase( ) + string.slice( 1 );
		}

		angular.element(document).ready(function(){
    $('.modal').modal();
		
		$('.collapsible').collapsible();
  	});

		mainSrvc.getUser( ).then(x => {
			x.data[0].first_name = capitalizeFirstLetter(x.data[0].first_name)
			x.data[0].last_name = capitalizeFirstLetter(x.data[0].last_name)
			x.data[0].newMessages = x.data[0].messages.filter(f=>{
				return f.senders_email != x.data[0].email
			})
			// console.log(x.data[0].newMessages);
			$scope.user = x.data[0]
			console.log($scope.user);
			$( ".dropdown-button" ).dropdown( )

		}, err => console.log( err ))

		$scope.logout = function ( ) {
			console.log( 'hitting me' );
			$scope.user = undefined
			mainSrvc.logout( ).then(x => location.reload( ))
		}
	}
])
