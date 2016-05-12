var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');

/**
 * @api {get} /workshops/ All Workshops
 * @apiName GetWorkshops
 * @apiGroup Workshops
 *
 *
 * @apiSuccess {JSON} All workshops listed
 */
router.get('/', function(req, res) {
    res.send("Not yet implemented");
});

module.exports = router;