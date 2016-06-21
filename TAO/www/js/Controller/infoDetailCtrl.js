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
});

//-------------------------------------------------------------------------------------
app.controller('partnersCtrl', function ($scope, $state, apiFactory, $cordovaInAppBrowser) {

    console.log("partnerCtrl");

    $scope.data = [];

    apiFactory.getPartners().then(function (response) {
        if (response != undefined) {
            $scope.data = response;
            console.log($scope.data);
        }
    }, function (error) {
        console.log(error);
    });

    $scope.openInAppBrowser = function(url) {
  
    var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'yes'
    };

    $cordovaInAppBrowser.open(url, '_blank', options)
      .then(function (event) {
        // success
      })
      .catch(function (event) {
        // error
      });
  }
});

//------------------------------------------------------------------------------------------

app.controller('informationCtrl', function ($scope, $state, $cordovaInAppBrowser) {

  console.log("informationCtrl");

  $scope.openInAppBrowser = function(url) {

    var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'yes'
    };

    $cordovaInAppBrowser.open(url, '_blank', options)
      .then(function (event) {
        // success
      })
      .catch(function (event) {
        // error
      });
  }
});

//----------------------------------------------------------------------------------------
app.controller('kontaktCtrl', function ($scope, $state, apiFactory, $cordovaInAppBrowser) {

  console.log("kontaktCtrl");

  $scope.openInAppBrowser = function(url) {

    var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'yes'
    };

    $cordovaInAppBrowser.open(url, '_blank', options)
      .then(function (event) {
        // success
      })
      .catch(function (event) {
        // error
      });
  }

});

//----------------------------------------------------------------------------------------