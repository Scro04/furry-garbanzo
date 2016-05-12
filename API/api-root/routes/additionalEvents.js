var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');

/**
 * @api {get} /additionalEvents/ All additional Events
 * @apiName GetAdditionalEvents
 * @apiGroup Additional Events
 *
 *
 * @apiSuccess {JSON} All additional events listed
 */
router.get('/', function(req, res) {
    res.send("Not yet implemented");
});

module.exports = router;