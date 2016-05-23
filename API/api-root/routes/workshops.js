var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');
var connection = require('../helpers/database.js');

/**
 * @api {get} /workshops/ All Workshops
 * @apiName GetWorkshops
 * @apiGroup Workshops
 *
 *
 * @apiSuccess {JSON} All workshops listed
 */
router.get('/', function (req, res) {
    connection.connection.query('SELECT WorkshopId, appWorkshops.EinheitId, appWorkshops.Sprache, appWorkshops.TitelGER, appWorkshops.TitelENG, appWorkshops.BeschreibungGER, appWorkshops.BeschreibungENG, appWorkshops.Teil, Zeit, appWorkshops.AKId, appWorkshops.Handout, AKPunkte, appWorkshops.Reihung, appWorkshops.Seminarraum, GROUP_CONCAT(DISTINCT ReferentId) as ReferentId, appEinheiten.TagId ,appEinheiten.Uhrzeit AS EinheitZeit, appTage.Datum, group_concat(DISTINCT appReferenten.Vorname) as Vorname, group_concat(DISTINCT appReferenten.Name) as Name ,group_concat(DISTINCT appReferenten.AkadgradPre ) as AkadgradPre , group_concat(DISTINCT appReferenten.AkadGradPost ) as AkadGradPost, group_concat(DISTINCT appReferenten.Land) as Land FROM appWorkshopsReferenten JOIN appWorkshops on WorkshopId = appWorkshops.id JOIN appEinheiten on appWorkshops.EinheitId = appEinheiten.id JOIN appTage on appTage.id = appEinheiten.TagId JOIN appReferenten on appReferenten.id = ReferentId GROUP BY WorkshopId ORDER BY appEinheiten.TagId', function (err, rows) {
        // ordering to match structure
        var response = {};
        const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
        for (var i = 0; i < rows.length; i++) {
            var date = new Date(rows[i]["Datum"]);
            date = weekdays[date.getDay()] + " " + date.getDate() + "." + (date.getMonth() + 1);
            if (response[date] == undefined)
                response[date] = [];

            // splitting time


            try {
                if (rows[i]["Zeit"]) {
                    rows[i]["type"] = 1
                    rows[i]["typeString"] = "Vortrag"
                    var time = rows[i]["Zeit"];
                    time = time.split(" - ");
                    rows[i]["startZeit"] = time[0]
                    rows[i]["endZeit"] = time[1]
                    delete rows[i]["Zeit"];
                } else {
                    rows[i]["type"] = 0
                    rows[i]["typeString"] = "Workshop"
                    var time = rows[i]["EinheitZeit"];
                    time = time.split("-");
                    rows[i]["startZeit"] = time[0]
                    rows[i]["endZeit"] = time[1]
                    delete rows[i]["Zeit"];
                }

                rows[i]["speakers"] = [];

                var tempspeakers =  rows[i]["ReferentId"].split(",");
                for(var z = 0; z < tempspeakers.length; z++)
                {
                    var speaker = {};
                    speaker.ReferentId = tempspeakers[z];
                    speaker.Vorname = (rows[i]["Vorname"]) ? rows[i]["Vorname"].split(",")[z] : "";
                    speaker.Name = (rows[i]["Name"]) ? rows[i]["Name"].split(",")[z] : "";
                    speaker.AkadgradPre = (rows[i]["AkadgradPre"])  ? rows[i]["AkadgradPre"].split(",")[z] : "";
                    speaker.AkadGradPost = (rows[i]["AkadGradPost"]) ? rows[i]["AkadGradPost"].split(",")[z] : "";

                    rows[i]["speakers"].push(speaker);
                }

                delete rows[i]["ReferentId"];
                delete rows[i]["Vorname"];
                delete rows[i]["Name"];
                delete rows[i]["AkadgradPre"];
                delete rows[i]["AkadGradPost"];
                delete rows[i]["Land"];

                delete rows[i]["EinheitZeit"];
                delete rows[i]["EinheitId"];
                delete rows[i]["TagId"];

                response[date].push(rows[i])

                delete rows[i]["EinheitZeit"];
            } catch (err) {
                console.log(err)
            }

        }

        res.send(response);
    });
});

module.exports = router;