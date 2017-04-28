app.controller('eventsCtrl', [
	'$scope',
	'eventsSrvc',
	function ( $scope, eventsSrvc ) {
		eventsSrvc.getEvents( ).then(x => {
			x.data.map(y=>{
				y.event_date = moment(y.event_date).format('ddd MMM Do YYYY')
			})
			$scope.currentEvents = x.data
		}, err => console.log( err ))
		$scope.filters={sports:false,videoGames:false,boardGames:false,misc:false}

	}
])
