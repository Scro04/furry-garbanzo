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
    connection.connection.query('SELECT appPreiseGruppen.id, appPreiseGruppen.BeschreibungGER, appPreiseGruppen.BeschreibungENG, appPreiseGruppen.id as Preisgruppe, appPreiseGruppen.BezeichnungGER, appPreiseGruppen.BezeichnungENG, appPreise.BezeichnungGER as PreisbezeichnungGer,appPreise.BezeichnungENG as PreisbezeichnungEng, appPreise.Preis, appPreise.PreisFruehbucher FROM appPreiseGruppen LEFT JOIN appPreise on appPreise.PreisGruppeId = appPreiseGruppen.id ORDER BY appPreise.Preis, appPreiseGruppen.id', function (err, rows) {
        var response = {};
        //var index = 0;
        for(var i = 0; i < rows.length; i++)
        {
            var pricegroup = rows[i]["Preisgruppe"];
            if(!response[pricegroup]) {
                response[pricegroup] = {};
                var tmppricegroup = {};
                tmppricegroup["BeschreibungGER"] = rows[i]["BeschreibungGER"];
                tmppricegroup["BeschreibungENG"] = rows[i]["BeschreibungENG"];
                tmppricegroup["BezeichnungGER"] = rows[i]["BezeichnungGER"];
                tmppricegroup["BezeichnungENG"] = rows[i]["BezeichnungENG"];
                tmppricegroup["Preise"] = [];
                response[pricegroup] = tmppricegroup;

            }
            delete rows[i]["BeschreibungGER"];
            delete rows[i]["BeschreibungENG"];
            delete rows[i]["BezeichnungGER"];
            delete rows[i]["BezeichnungENG"];
            delete rows[i]["Preisgruppe"];
            delete rows[i]["id"];

            console.log(response[pricegroup]);
            response[pricegroup]["Preise"].push(rows[i]);
        }

        res.send(response);
    })

});

module.exports = router;