app.controller('anfahrtCtrl', function ($scope, $state, $cordovaInAppBrowser, $ionicHistory) {

  console.log("anfahrtCtrl");


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
