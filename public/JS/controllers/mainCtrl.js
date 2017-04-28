app.controller('mainCtrl', [
	'$scope',
	'$location',
	'mainSrvc',
	function ( $scope, $location, mainSrvc ) {
		function capitalizeFirstLetter( string ) {
			return string.charAt( 0 ).toUpperCase( ) + string.slice( 1 );
		}

		angular.element( document ).ready( function ( ) {
			$( '.modal' ).modal( );

			$( '.collapsible' ).collapsible( );
			$( ".dropdown-button" ).dropdown( )

			$('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 15
		})// Creates a dropdown of 15 years to control year
		});

		mainSrvc.getUser( ).then(x => {

			if(x.data[0].first_name){
				x.data[0].first_name = capitalizeFirstLetter( x.data[0].first_name )
			}
			if(x.data[0].last_name){
				x.data[0].last_name = capitalizeFirstLetter( x.data[0].last_name )
			}
			if(x.data[0].messenger[0]){
				$scope.selected = x.data[0].messenger[0].email
			}
			$scope.user = x.data[0]
			console.log( $scope.user );

		}, err => console.log( err ))

		$scope.logout = function ( ) {
			console.log( 'hitting me' );
			$scope.user = undefined
			mainSrvc.logout( ).then(x => location.reload( ))
		}

		$scope.rsvp = function(user, event, name){
			let obj = {user,event}
			mainSrvc.rsvp(obj).then(x=>{
			})
			location.reload()
		}
		$scope.select = function(email){
			$scope.selected = email
		}
	}

])
