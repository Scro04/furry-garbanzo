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

        var response = rows;
        //var index = 0;
        function getWorkshopsForSpeaker(index) {
            if(index < response.length)
            {
                connection.connection.query('SELECT WorkshopId FROM appWorkshopsReferenten WHERE ReferentId = ?', response[index]["id"] , function(err, rows) {

                    response[index]["Bild"] = "http://www.tcmkongress.at/de/Referenten/GetFoto/" + response[index]["id"];
                    response[index]["workshopsIDs"] = [];
                    for (var z = 0; z < rows.length; z++)
                    {
                        response[index]["workshopsIDs"].push(rows[z]["WorkshopId"]);
                    }
                    getWorkshopsForSpeaker(++index);
                })

            }else {
                res.send(response);
            }
        }
        getWorkshopsForSpeaker(0);

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