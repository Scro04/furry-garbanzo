app.controller('homeCtrl', function($scope, $state) {


$scope.tabs = function(state)
{
  $state.go(state);
}

});
