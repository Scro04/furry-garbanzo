var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');
const os = require('os');


/**
 * @api {get} /info/ Info
 * @apiName Info
 * @apiGroup Basic
 *
 *
 * @apiSuccess {JSON} general infos
 */
router.get('/', function(req, res) {
    var response = {};
    response.title = "TAO-API Info";
    response.uptime = os.uptime() + " s";
    response.freemem = os.freemem() + " B";
    res.send(response);
});

module.exports = router;