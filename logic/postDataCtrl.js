const db = require( '../db.js' );

module.exports = {

	updateProfile: ( req, res, next ) => {
		let {
			firstName,
			lastName,
			gender,
			interests,
			eventTypes,
			photo
		} = req.body
		db.updateUserInfo([
			firstName,
			lastName,
			gender,
			interests,
			eventTypes,
			photo,
			req.user._json.email
		], function ( err, profile ) {
			return res.status( 200 ).send( profile )
		})
	},

	createEvent: ( req, res, next ) => {
		let {
			date,
			title,
			desc,
			user,
			type,
			address,
			photo
		} = req.body
		db.createEvent([
			date,
			title,
			desc,
			user,
			type,
			address,
			photo
		], function ( err, createdEvent ) {
			// console.log(createdEvent, err);
			db.addEventAttendance([
				createdEvent[0].id, user
			], function ( err, attendance ) {
				// console.log(err, '############', attendance);
			})
		})
	},

	createNewMessage: ( req, res, next ) => {
		let { sender, receiver, message } = req.body
		db.createMessage([
			sender, receiver, message
		], function ( err, newMessage ) {
			console.log( err, '$$$$$$$$$$$$', newMessage );
			res.send( newMessage )
		})
	},

	// createAlbum: (req, res, next) => {
	//   let {
	//     userEmail,
	//     description,
	//     photoUrl
	//   } = req.body
	//   db.createAlbum([userEmail, description, photoUrl], function(err, newAlbum) {
	//     console.log(err, '@@@@@@@@@@@', newAlbum);
	//     res.send(newAlbum)
	//   })
	// },

	addFriend: ( req, res, next ) => {
		console.log( req.body );
		db.addFriend([
			req.body.sender, req.body.receiver
		], function ( err, newFriend ) {
			console.log( err, newFriend );
			res.send( newFriend )
		})
	},
	acceptFriend: function ( req, res ) {
		db.acceptFriend([
			req.body.invited, req.body.inviter
		], ( err, succ ) => console.log( err ))
		db.acceptFriend([
			req.body.inviter, req.body.invited
		], ( err, succ ) => console.log( err ))
	},
	join_events: function ( req, res ) {
		console.log( req.body );
		db.joinEvents([
			req.body.event, req.body.user
		], ( err, event ) => console.log( err ))
	}

}
