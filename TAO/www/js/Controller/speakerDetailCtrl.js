
app.controller('speakerDetailCtrl', function ($scope, $state, $stateParams, $ionicHistory) {


  $scope.$on("$ionicView.beforeEnter", function () {

    console.log($scope.$root.currentSpeaker);

  });

  $scope.goBack = function()
  {
    console.log($ionicHistory);
    $state.go('tab.referenten');
  }

});
