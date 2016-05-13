app.controller('programCtrl', function ($scope, $state) {

    $scope.data = {};
    $scope.$on("$ionicView.beforeEnter", function () {
        $scope.data["Freitag"] = [];
        $scope.data["Samstag"] = [];
        $scope.data["Sonntag"] = [];

        for (var i = 0; i < 4; i++) {
            var elem = {
                type: 0,
                title: "Titel des Vortrags Nr. 1 - Zusätzlicher Titel",
                speaker: "Dr. Max Mustermann1",
                start: "09:00",
                end: "09:30"
            };
            $scope.data["Freitag"].push(elem);
            $scope.data["Samstag"].push(elem);
            $scope.data["Sonntag"].push(elem);

        }

        console.log($scope.data);
    });
});