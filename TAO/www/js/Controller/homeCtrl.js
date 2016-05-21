app.controller('homeCtrl', function($scope, $state) {


  $scope.$root.currentSpeaker;


$scope.tabs = function(state)
{
  $state.go(state);
}

});
