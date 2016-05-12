var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');

/**
 * @api {get} /congresses/ All congresses
 * @apiName GetCongresses
 * @apiGroup Congresses
 *
 *
 * @apiSuccess {JSON} All congresses listed
 */
router.get('/', function(req, res) {
    res.send("Not yet implemented");
});

module.exports = router;