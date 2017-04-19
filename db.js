const massive = require('massive');
const keys = require('./keys');

const massiveInstance = massive.connectSync({
  connectionString: keys.connectionString
})

module.exports = massiveInstance
