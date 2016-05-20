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
    connection.connection.query('SELECT WorkshopId, appWorkshops.EinheitId, appWorkshops.Sprache, appWorkshops.TitelGER, appWorkshops.TitelENG, appWorkshops.BeschreibungGER, appWorkshops.BeschreibungENG, appWorkshops.Teil, Zeit, appWorkshops.AKId, appWorkshops.Handout, AKPunkte, appWorkshops.Reihung, appWorkshops.Seminarraum, ReferentId, appEinheiten.TagId ,appEinheiten.Uhrzeit AS EinheitZeit, appTage.Datum FROM appWorkshopsReferenten JOIN appWorkshops on WorkshopId = appWorkshops.id JOIN appEinheiten on appWorkshops.EinheitId = appEinheiten.id JOIN appTage on appTage.id = appEinheiten.TagId GROUP BY WorkshopId ORDER BY appEinheiten.TagId;', function (err, rows) {
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
                    var time = rows[i]["Zeit"];
                    time = time.split(" - ");
                    rows[i]["startZeit"] = time[0]
                    rows[i]["endZeit"] = time[1]
                    delete rows[i]["Zeit"];
                } else {
                    rows[i]["type"] = 0
                    var time = rows[i]["EinheitZeit"];
                    time = time.split("-");
                    rows[i]["startZeit"] = time[0]
                    rows[i]["endZeit"] = time[1]
                    delete rows[i]["Zeit"];
                }

                var time = rows[i]["EinheitZeit"];
                time = time.split("-");
                rows[i]["startEinheit"] = time[0]
                rows[i]["endEinheit"] = time[1]
                response[date].push(rows[i])

                delete rows[i]["EinheitZeit"];
            }catch(err){}

        }

        res.send(response);
    });
});

module.exports = router;