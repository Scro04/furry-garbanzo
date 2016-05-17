var express = require('express'); // api framework
var winston = require('winston'); // logger
const logger = require('./helpers/logger.js');
var connection = require('./helpers/database.js');

var app = express();

logger.info("API-Started");

connection.connection.query('SELECT 1', function(err, rows) {
    // connected! (unless `err` is set)
});

app.use(require('./routes'));

app.listen(3000, function() {
    console.log('Listening on port 3000...')
});