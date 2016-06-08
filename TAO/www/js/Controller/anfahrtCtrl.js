app.controller('anfahrtCtrl', function ($scope, $state, $cordovaInAppBrowser, $ionicHistory, $ionicPopup) {

  console.log(window.innerWidth);
  if(window != undefined && window.innerWidth < 700) {
    jQuery("#route-button").addClass("button-small");
  }


  $scope.openInAppBrowser = function (url) {

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


    //$cordovaInAppBrowser.close();
  }

  var startNavigation = function () {
        //replace , with .
        var lat = "47.077042";
        var lon = "15.447721";

        var start = null; //current location
        //var destination = [lat, lon];
        var destination = "Harrachgasse 21, 8020 Graz";

        launchnavigator.navigate(
            destination,
            start,
            function () {
                console.log("Navigation Plugin success");
            },
            function (error) {
                console.log("Navigation Plugin error: " + error);
            }, {
                disableAutoGeolocation: true
            }
        );
    }

    $scope.navigateToCongress = function () {
        startNavigation();
    }
  
  
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  $scope.goHome = function () {
    $ionicHistory.clearHistory();
    $ionicHistory.nextViewOptions({
      historyRoot: true
    });
    $state.go('home');
  }

});
