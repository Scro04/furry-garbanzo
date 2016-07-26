app.controller('homeCtrl', function ($scope, $state, dataFactory, $ionicPopup, $cordovaSplashscreen, $ImageCacheFactory, $q) {

    $scope.$root.currentSpeaker;
    $scope.$root.currentProgram;

    console.log = function(){};

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

    $scope.preLoadSpeakerImages = function () {
        var deferred = $q.defer();
        try {
            var data_obj = {};
            var images = [];
            dataFactory.getSpeakers().then(function (data) {
                data_obj = data;
                if (data_obj != undefined) {
                    for (key in data_obj) {
                        var speaker = [];
                        if (data_obj.hasOwnProperty(key)) {
                            var speaker = data_obj[key];
                            if (speaker != undefined) {
                                for (var i = 0; i < speaker.length; i++) {
                                    if (speaker[i] != undefined && speaker[i].Bild != undefined) {
                                        images.push(speaker[i].Bild);
                                    }
                                }
                            }
                        }
                    }
                    
                    deferred.resolve();
                    
                    $ImageCacheFactory.Cache(images).then(function () {
                        console.log("Images done loading!");

                    }, function (failed) {
                        console.log("An image failed: " + failed);
                    });
                }
            }, function () { })
        } catch (error) {
            console.log(error);
            deferred.resolve();
        }

        return deferred.promise;
    };

    dataFactory.loadData().then(function () {
        $scope.preLoadSpeakerImages().then(function () {
            if (window.cordova && $cordovaSplashscreen) {
                setTimeout(function () {
                    $cordovaSplashscreen.hide();
                }, 1000);
            }
        });

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