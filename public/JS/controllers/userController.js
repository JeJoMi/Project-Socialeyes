app.controller('userController', [
	'$scope',
	'$location',
	'userService',
	function ( $scope, $location, userService ) {

		// NOTE: will handle user uploaded photos through amazon s3
		$scope.upload = function ( id ) {
			console.log( 'hitting me' );
			userService.upload( id )
		}

		// FIXME: Add ability to add photos to this
		$scope.submitProfile = function ( firstName, lastName, interests, gender, eventTypes, user ) {
			let eventTypesArr = [ ]
			for ( let event in eventTypes ) {
				if (eventTypes[event])
					eventTypesArr.push( event )
			}
			let obj = {
				firstName: firstName || user.first_name,
				lastName: lastName || user.last_name,
				interests: interests || user.interests,
				eventTypes: eventTypesArr || user.event_types,
				gender: gender || user.gender,
				photo: document.getElementById( 'preview' ).src || user.photo
			}
			console.log( obj );
			userService.submitProfile( obj ).then(x => {
				console.log( x );
				$location.path( '/home' )
			}, err => {
				console.log( err );
			})
		}
		$scope.createEvent = function ( title, desc, type, street, zip, city, user, date ) {
			let photo = document.getElementById( 'preview' ).src
			let obj = {
				title,
				desc,
				type,
				address: `${ street }&${ zip }&${ city }`,
				photo,
				user,
				date
			}
			console.log( obj );
			userService.createEvent( obj ).then(x=>console.log(x),err=>console.log(err));
			location.reload( )
		}
		userService.getEvents( ).then(response => {
			response.data.reverse( )
			$scope.events = response.data
		})

		$scope.acceptFriend = function ( inviter, invited ) {
			console.log('hitting me');
			let obj = {
				inviter,
				invited
			}
			userService.acceptFriend( obj ).then(x=>{location.reload()},err=>console.log(err))
		}
		$scope.declineFriend = function(inviter, invited){
			let obj = {inviter, invited}

		}
	}
])
