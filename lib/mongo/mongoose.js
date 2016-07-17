var mongoose = require('mongoose');
var config = require('../config/config.js');

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + config.mongodb);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});
// 当应用重启或终止的时候 关闭连接
Shutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// nodemon 重启 
process.once('SIGUSR2', function() {
    Shutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// 应用终止
process.on('SIGINT', function() {
    Shutdown('app termination', function() {
        process.exit(0);
    });
});

module.exports = function() {
    var db = mongoose.connect(config.mongodb);

    require('../models/user.server.model.js');
    require('../models/books.js');

    return db;
}