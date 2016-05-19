var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'TAO-Testing'
});

connection.connect();

exports.connection = connection;