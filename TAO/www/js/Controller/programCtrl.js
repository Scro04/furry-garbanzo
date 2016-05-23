app.controller('programCtrl', function ($scope, $state, apiFactory) {

    $scope.data = $scope.$root.program;


    $scope.goToDetail = function(entry)
    {
      $scope.$root.currentProgram = entry;
      $state.go('tab.courseInfo');
    }

  $scope.goHome = function ()
  {
    $state.go('home');
  }
});
