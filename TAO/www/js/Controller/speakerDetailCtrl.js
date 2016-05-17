
app.controller('speakerDetailCtrl', function ($scope, $state, $stateParams, $ionicHistory) {

  $scope.data = $stateParams.id;

  console.log($scope.data);


  $scope.goBack = function()
  {
    console.log($ionicHistory);
    $state.go('tab.referenten');
  }

});
