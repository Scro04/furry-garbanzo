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
    connection.connection.query('SELECT * FROM appReferenten JOIN appReferentenBilder USING(id) ORDER BY Name', function(err, rows) {
        var rowBuffer = rows;
        var response = {};
        //var index = 0;
        function getWorkshopsForSpeaker(index) {
            if(index < rowBuffer.length)
            {
                connection.connection.query('SELECT WorkshopId FROM appWorkshopsReferenten WHERE ReferentId = ?', rowBuffer[index]["id"] , function(err, rows) {

                    rowBuffer[index]["Bild"] = "http://www.tcmkongress.at/de/Referenten/GetFoto/" + rowBuffer[index]["id"];
                    rowBuffer[index]["workshopsIDs"] = [];
                    for (var z = 0; z < rows.length; z++)
                    {
                        rowBuffer[index]["workshopsIDs"].push(rows[z]["WorkshopId"]);
                    }
                    var tempFirstLetter = rowBuffer[index]["Name"][0];
                    if(!response[tempFirstLetter])
                        response[tempFirstLetter] = [];
                    response[tempFirstLetter].push(rowBuffer[index])


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