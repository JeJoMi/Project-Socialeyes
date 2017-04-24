app.controller('eventsCtrl', [
	'$scope',
	'eventsSrvc',
	function ( $scope, eventsSrvc ) {
		eventsSrvc.getEvents( ).then(x => {
			$scope.currentEvents = x.data
		}, err => console.log( err ))

		$scope.createEvent = function (title, desc, eventTypes, strAdr, zip, city) {
			
		}

	}
])
