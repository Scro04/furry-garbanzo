var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');
var connection = require('../helpers/database.js');

/**
 * @api {get} /speakers/ List of all speakers
 * @apiName GetSpeakers
 * @apiGroup Speakers
 *
 *
 * @apiSuccess {JSON} All speakers listed
 */
router.get('/', function(req, res) {

    //SELECT * FROM appReferenten JOIN appReferentenBilder USING(id)
    connection.connection.query('SELECT * FROM appReferenten JOIN appReferentenBilder USING(id)', function(err, rows) {
        res.send(rows);
    });
});

/**
 * @api {get} /speakers/:id Get a Speaker
 * @apiName GetASpeakers
 * @apiGroup Speakers
 *
 *
 * @apiSuccess {JSON} The requested speaker
 */
router.get('/:id', function(req, res) {
    //SELECT * FROM appReferenten JOIN appReferentenBilder USING(id)
    connection.connection.query('SELECT * FROM appReferenten JOIN appReferentenBilder USING(id) WHERE id=?', [req.param('id')], function(err, rows) {
        res.send(rows);
    });
});

module.exports = router;