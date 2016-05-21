app.controller('referentenCtrl', function ($scope, $state, apiFactory) {

    console.log("referentenCtrl");


    $scope.data = {};

    apiFactory.getAllSpeakers().then(function (response) {
        $scope.data = response;

    }, function (error) {
        console.log(error);
    });

    $scope.$on("$ionicView.beforeEnter", function () {

        /*$scope.data["A"] = [];
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

        }*/

    });

    $scope.goToSpeakerDetail = function (speaker) {

        $scope.$root.currentSpeaker = speaker;
        $state.go('tab.speakerDetail');
    }

})