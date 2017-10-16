const mongoose = require('mongoose')
const config = require('../config/index')

mongoose.Promise = global.Promise

mongoose.connect(config.getConnectionStringOnline())
mongoose.connection.on('connected', () => {
    console.log("Connected to mongodb")
})

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

var disconnect = function () {
    mongoose.disconnect()
}

module.exports = { mongoose }