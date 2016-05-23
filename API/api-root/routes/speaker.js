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

router.get('/', function (req, res) {

    connection.connection.query('SELECT appReferenten.id, Name, Vorname, AkadgradPre, AkadGradPost, Land, appReferenten.BeschreibungGER, appReferenten.BeschreibungENG,group_concat(DISTINCT appWorkshopsReferenten.WorkshopId) as WorkshopId FROM appReferenten LEFT JOIN appWorkshopsReferenten on appReferenten.id = appWorkshopsReferenten.ReferentId GROUP BY appReferenten.id ORDER BY Name', function (err, rows) {
        var response = {};
        //var index = 0;
        for(var i = 0; i < rows.length ; i++)
        {
            rows[i]["Bild"] = "http://www.tcmkongress.at/de/Referenten/GetFoto/" + rows[i]["id"];

            if(rows[i]["WorkshopId"])
                rows[i]["WorkshopId"] = rows[i]["WorkshopId"].split(',');

            var tempFirstLetter = rows[i]["Name"][0];
            if (!response[tempFirstLetter])
                response[tempFirstLetter] = [];

            response[tempFirstLetter].push(rows[i])

        }

        res.send(response);
    })


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