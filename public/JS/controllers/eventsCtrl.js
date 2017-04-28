app.controller('eventsCtrl', [
	'$scope',
	'eventsSrvc',
	function ( $scope, eventsSrvc ) {
		eventsSrvc.getEvents( ).then(x => {
			$scope.currentEvents = x.data
		}, err => console.log( err ))
		$scope.filters={sports:false,videoGames:false,boardGames:false,misc:false}

	}
])
