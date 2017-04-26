const db = require( '../db.js' );

module.exports = {
	user: ( req, res, next ) => {
		if ( req.user ) {
			db.getUser([req.user._json.email], ( err, users ) => {
				db.getEventByUserEmail([users[0].email], ( err, event ) => {
					users[0].hostedEvents = event
					db.getUsersAttendedEvents([users[0].email], ( err, attendedEvents ) => {
						// console.log(err,'++++++++++++++', attendedEvents);
						users[0].events = attendedEvents
						db.getMessagesByUserEmail([users[0].email], ( err, receivedMessage ) => {
							users[0].messages = receivedMessage
							db.getFriends([users[0].email], ( err, currentFriends ) => {

								users[0].friends = currentFriends

								db.getPhotosFromAlbum([users[0].email], ( err, currentPhotos ) => {
									// console.log(err, '++++++++++++++++', currentPhotos);
									users[0].photos = currentPhotos
									db.getPendingFriends([users[0].email], ( err, pendingFriends ) => {
										console.log( err );
										users[0].newFriends = pendingFriends
										res.send( users )
									})
								})
							});
						});
					});
				});
			});
		}
	},

	profile: ( req, res, next ) => {
		console.log( "hitting me" );
		db.getProfileById([req.params.id], ( err, user ) => {
			user = user[0]
			if ( !user )
				return
			db.getEventByUserEmail([user.email], ( err, event ) => {
				user.hostedEvents = event
				db.getUsersAttendedEvents([user.email], ( err, attendedEvents ) => {
					user.events = attendedEvents
					db.getFriends([user.email], ( err, currentFriends ) => {
						console.log( err );
						user.friends = currentFriends
						db.getPhotosFromAlbum([user.email], ( err, currentPhotos ) => {
							user.photos = currentPhotos
							res.send( user )
						})
					});
				});
			});
		});
	},

	events: function ( req, res, next ) {
		db.getEvent(( err, currentEvents ) => {
			// console.log(err, '=================', currentEvents);
			res.send( currentEvents )
		})
	},

	userEvents: function ( req, res, next ) {
		db.getEventsForUser(( err, events ) => {
			console.log( err );
			res.send( events )
		})
	}
}
