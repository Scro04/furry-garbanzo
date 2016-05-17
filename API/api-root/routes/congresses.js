var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');
var connection = require('../helpers/database.js');

/**
 * @api {get} /congresses/ All congresses
 * @apiName GetCongresses
 * @apiGroup Congresses
 *
 *
 * @apiSuccess {JSON} All congresses listed
 */
router.get('/', function(req, res) {

    connection.connection.query('SELECT * FROM appKongresse', function(err, rows) {
        for(var i = 0; i < rows.length; i++)
        {
            rows[i]["Von"] = new Date(rows[i]["Von"]).getTime();
            rows[i]["Bis"] = new Date(rows[i]["Bis"]).getTime();
            rows[i]["FruehbucherBis"] = new Date(rows[i]["FruehbucherBis"]).getTime();


        }
        res.send(rows);
    });
});

module.exports = router;