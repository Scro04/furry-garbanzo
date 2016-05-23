app.controller('courseInfoCtrl', function ($scope, $state, $stateParams) {

  $scope.data = $stateParams.id;

  console.log($scope.$root.currentProgram);

  $scope.goBack = function()
  {
    $state.go('tab.program');
  }

});
