var winston = require('winston'); // logger

var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: '/home/ubuntu/apiLog.log'})
    ]
});

exports.info = function (message) {
    logger.log('info', message);
};

exports.error = function (message) {
    logger.log('error', message);
};