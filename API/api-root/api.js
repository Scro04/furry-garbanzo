var express = require('express'); // api framework
var winston = require('winston'); // logger
const logger = require('./helpers/logger.js');
var connection = require('./helpers/database.js');

var app = express();

logger.info("API-Started");


app.use("/tao", require('./routes'));

app.listen(3000, function() {
    console.log('Listening on port 3000...')
});