app.controller('referentenCtrl', function($scope, $state) {

  console.log("referentenCtrl");


  $scope.data = {};

  $scope.$on("$ionicView.beforeEnter", function () {
    $scope.data["A"] = [];
    $scope.data["B"] = [];
    $scope.data["C"] = [];

    for (var i = 0; i < 2; i++) {
      var elem = {
        id: i,
        vorname: "Dr. Peter",
        nachname: "Aluani",
        country: "Österreich",
        image: "img/16.jpg"
      };
      $scope.data["A"].push(elem);
      $scope.data["B"].push(elem);
      $scope.data["C"].push(elem);

    }
    console.log($scope.data);
  });

  $scope.goToSpeakerDetail = function (speaker)
  {
    var data = {
      id: speaker.id
    };
    $state.go('tab.speakerDetail', data);
  }

})
