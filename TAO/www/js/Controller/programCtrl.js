app.controller('programCtrl', function ($scope, $state, dataFactory, $ionicPopup, $ionicHistory) {
  $scope.data = undefined;
  $scope.listData = [];

  if(window != undefined && window.innerWidth < 700) {
    setTimeout(function() {
      jQuery('ion-nav-view[nav-view="active"] .btn-switch').addClass("button-small");
    }, 50);
  }

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
        $scope.switchList(1);

      }, function () {
        $scope.showAlert();
      })
    }
  });

  $scope.switchList = function (key) {
    var i = 1;
    for (var k in $scope.data) {
      if (i === key) {
        $scope.listData = $scope.data[k];
        break;
      }
      i = i + 1;
    }

    var str = 'ion-nav-view[nav-view="active"] #btn-' + key;
    var str_2 = 'ion-nav-view[nav-view="active"] .btn-switch';
    setTimeout(function () {
      jQuery(str_2).removeClass("active");
      jQuery(str).addClass("active");
    }, 50);

  }

  $scope.goToDetail = function (entry) {
    $scope.$root.currentProgram = entry;
    $state.go('tab.courseInfo');
  }


  $scope.goHome = function () {
    $ionicHistory.clearHistory();
    $ionicHistory.nextViewOptions({
      historyRoot: true
    });
    $state.go('home');
  }
});
