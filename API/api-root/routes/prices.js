var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');

router.get('/', function(req, res) {
    res.send("Not yet implemented");
});

module.exports = router;