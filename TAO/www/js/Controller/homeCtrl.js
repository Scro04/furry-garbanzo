app.controller('homeCtrl', function ($scope, $state, dataFactory, $ionicPopup) {

    $scope.$root.currentSpeaker;
    $scope.$root.currentProgram;

    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Daten konnten nicht aktulisiert werden!',
            template: 'Bitte überprüfen Sie Ihre Internetverbindung',
            buttons: [{
                text: 'OK',
                type: 'button-assertive'
            }]
        });
    };


    dataFactory.loadData().then(function () {
        if (window.cordova && $cordovaSplashscreen) {
            setTimeout(function () {
                $cordovaSplashscreen.hide();
            }, 1000);

        }
    }, function () {
        console.log("error");
        $scope.showAlert();
        if (window.cordova && $cordovaSplashscreen) {
            setTimeout(function () {
                $cordovaSplashscreen.hide();
            }, 1000);

        }
    });


    $scope.tabs = function (state) {
        $state.go(state);
    }

});