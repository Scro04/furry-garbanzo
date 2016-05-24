app.controller('referentenCtrl', function ($scope, $state, dataFactory, $ionicPopup) {

    console.log("referentenCtrl");
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
            dataFactory.getSpeakers().then(function (data) {
                $scope.data = data;
            }, function () {
                $scope.showAlert();
            })
        }
    });

    $scope.goToSpeakerDetail = function (speaker) {

        $scope.$root.currentSpeaker = speaker;
        $state.go('tab.speakerDetail');
    }

})
