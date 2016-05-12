var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');

/**
 * @api {get} /speakers/ List of all speakers
 * @apiName GetSpeakers
 * @apiGroup Speakers
 *
 *
 * @apiSuccess {JSON} All speakers listed
 */
router.get('/', function(req, res) {
    res.send("Not yet implemented");
});

module.exports = router;