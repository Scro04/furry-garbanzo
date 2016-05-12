var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');

// routes
router.use('/info', require('./info.js'));
router.use('/additionalEvents', require('./additionalEvents.js'));
router.use('/congresses', require('./congresses.js'));
router.use('/prices', require('./prices.js'));
router.use('/speakers', require('./speaker.js'));
router.use('/workshops', require('./workshops.js'));


// default route
router.get('/', function(req, res) {
   res.send("-- Welcome to the TAO-API --")
});

module.exports = router;