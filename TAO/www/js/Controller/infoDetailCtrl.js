app.controller('pricesCtrl', function ($scope, $state, apiFactory) {

    console.log("pricesCtrl");

    $scope.data = [];

    apiFactory.getPrices().then(function (response) {
        if (response != undefined) {
            $scope.data = response;
            for (var i = 0; i < $scope.data.length; i++) {
                var elem1 = $scope.data[i];
                for (var x = 0; x < elem1.Preise.length; x++) {
                    var elem = elem1.Preise[x];
                    if (elem.PreisbezeichnungGer.indexOf(" TAO") !== -1)
                        elem.PreisbezeichnungGer = elem.PreisbezeichnungGer.replace(" TAO", "");
                }

            }
        }

    }, function (error) {
        console.log(error);
    });


})