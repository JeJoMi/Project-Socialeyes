app.controller('userController', [
	'$scope',
	'$location',
	'userService',
	function ( $scope,$location, userService ) {
		// NOTE: will handle user uploaded photos through amazon s3
		$scope.upload = function ( id ) {
			userService.upload( id )
		}

		// FIXME: Add ability to add photos to this
		$scope.submitProfile = function ( firstName, lastName, interests, gender, eventTypes ) {
			let eventTypesArr = [ ]
			for ( let event in eventTypes ) {
				if (eventTypes[event])
					eventTypesArr.push( event )
			}
			let obj = {
				firstName,
				lastName,
				interests,
				eventTypes: eventTypesArr,
				gender,
				photo:document.getElementById('preview').src
			}
			console.log(obj);
			userService.submitProfile( obj ).then(x => {
				console.log( x );
			}, err => {
				console.log( err );
			})
		}
	}
])
