app.controller('anfahrtCtrl', function($scope, $state, $cordovaInAppBrowser) {

  console.log("anfahrtCtrl");


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


    //$cordovaInAppBrowser.close();
  }

});
