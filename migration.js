var massiveMigrate = require("massive-migrate");
const keys = require('./keys');
var migrationsDirectory = __dirname + '/migrations';
var version = '0';
var options =  {
	connectionString : keys.connectionString,
	directory : migrationsDirectory
}

massiveMigrate(options, function (err, migrations) {
  console.log(err)
  console.log(migrations)
    if (err) {
        return console.log('migration error', err)
    }

    migrations.runUpMigration({ name : "create-users-" + version }, function(err) {
        if(!err) {
        	console.log('Users table created');
        }

        migrations.runUpMigration({ name: "create-event-" + version}, function(err) {
          if(!err) {
            console.log('Event table created')
          }

          migrations.runUpMigration({ name: "create-eventAttendance-" + version}, function(err) {
            if(!err) {
              console.log('Event-attendance table created')
            }

						migrations.runUpMigration({ name: "create-album-" + version}, function(err) {
							if(!err) {
								console.log('Album table created')
							}

							migrations.runUpMigration({ name: "create-friends-" + version}, function(err) {
								if(!err) {
									console.log('Friends table created')
								}

								migrations.runUpMigration({ name: "create-pending_friends-" + version}, function(err) {
									if(!err) {
										console.log('Pending-friends table created')
									}

									migrations.runUpMigration({ name: "create-messages-" + version}, function(err) {
										if(!err) {
											console.log('Messages table created')
										}
									});
								});
							});
						});
          });
        });
    });


    migrations.runUpMigration({ name: "create-rating-" + version}, function(err) {
      if(!err) {
        console.log('Ratings table created')
      }
    });
});
