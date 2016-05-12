var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');

/**
 * @api {get} /prices/ All prices
 * @apiName GetPrices
 * @apiGroup Prices
 *
 *
 * @apiSuccess {JSON} All prices listed
 */
router.get('/', function(req, res) {
    res.send("Not yet implemented");
});

module.exports = router;