app.controller('homeCtrl', function($scope, $state, apiFactory) {


  $scope.$root.speaker;
  $scope.$root.currentSpeaker;
  $scope.$root.program;
  $scope.$root.currentProgram;


  apiFactory.getAllSpeakers().then(function (response) {
    $scope.$root.speaker = response;
    console.log(response);

  }, function (error) {
    console.log(error);
  });

  apiFactory.getWorkshops().then(function (response) {
    $scope.$root.program = response;
    console.log(response);

  }, function (error) {
    console.log(error);
  });


$scope.tabs = function(state)
{
  $state.go(state);
}

});
