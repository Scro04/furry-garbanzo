app.controller('courseInfoCtrl', function ($scope, $state, $stateParams, $ionicHistory) {

  $scope.data = $stateParams.id;

  $scope.entries = {
    id: 1,
    type: "Vortrag",
    title: "Titel des Vortrags Nr. 1 - Zusätzlicher Titel",
    speaker: "Dr. Max Mustermann1",
    start: "09:00",
    end: "09:30"
    };

  $scope.goBack = function()
  {
    console.log($ionicHistory);
    $state.go('tab.program');
  }

});
