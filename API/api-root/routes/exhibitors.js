var express = require('express');
var router = express.Router();
const logger = require('../helpers/logger.js');
var connection = require('../helpers/database.js');

/**
 * @api {get} /prices/ All prices
 * @apiName GetPrices
 * @apiGroup Prices
 *
 *
 * @apiSuccess {JSON} All prices listed
 */
router.get('/', function(req, res) {
    connection.connection.query('SELECT type, title, link FROM links_partner', function (err, rows) {

        // 3; <h2>andere TCM Kongresse</h2>
        // 2; Ausstellerfirmen, Inserenten und Kooperationspartner
        // 1; Unterstützende Gesellschaften</h2>
        // 0 <h2>Veranstalter 2016</h2>

        const types = ["Veranstalter 2016", "Unterstützende Gesellschaften", "Ausstellerfirmen, Inserenten und Kooperationspartner", "Andere TCM Kongresse" ];

        var response = {};
        for (var i = 0; i < rows.length; i++) {
            var type = rows[i].type
            if (!response[types[type]]) {
                response[types[type]] = [];
            }
            delete rows[i].type;
            response[types[type]].push(rows[i]);
        }

        res.send(response);
    })

});

module.exports = router;
