app.controller('programCtrl', function ($scope, $state, dataFactory, $ionicPopup) {
  $scope.data = undefined;

  $scope.showAlert = function () {
    var alertPopup = $ionicPopup.alert({
      title: 'Daten konnten nicht geladen werden!',
      template: 'Bitte überprüfen Sie Ihre Internetverbindung',
      buttons: [{
        text: 'OK',
        type: 'button-assertive'
      }]
    });
  };

  $scope.$on("$ionicView.beforeEnter", function () {
        if ($scope.data == undefined) {
            dataFactory.getProgram().then(function (data) {
                $scope.data = data;
            }, function () {
                $scope.showAlert();
            })
        }
    });

  $scope.goToDetail = function (entry) {
    $scope.$root.currentProgram = entry;
    $state.go('tab.courseInfo');
  }

  $scope.goHome = function () {
    $state.go('home');
  }
});
