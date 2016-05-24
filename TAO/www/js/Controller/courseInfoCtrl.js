app.controller('courseInfoCtrl', function ($scope, $state, $stateParams, $ionicPopup, $ionicModal, $q, 
$cordovaCalendar, dataFactory) {

    $scope.speakerDataModel = undefined;
    $scope.eventAdded = false;
    
    $scope.$on("$ionicView.beforeEnter", function() {
        dataFactory.getData($scope.$root.currentProgram.Id.toString()).then(function(value) {
            if(value != undefined) {
                $scope.eventAdded = Boolean(value);
            }  
        })
    })

    $ionicModal.fromTemplateUrl('templates/speaker-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Ein Fehler ist aufgetreten!',
            template: 'Leider konnte der Speaker nicht gefunden werden, bitte versuchen Sie es später erneut, vielen Dank!'
        });
    };

    $scope.openSpeakerModal = function (referentId) {
        try {
            for (var key in $scope.$root.speaker) {
                if ($scope.$root.speaker.hasOwnProperty(key)) {
                    for (var speaker in $scope.$root.speaker[key]) {
                        if ($scope.$root.speaker[key].hasOwnProperty(speaker) && $scope.$root.speaker[key][speaker].id != null && $scope.$root.speaker[key][speaker].id == referentId) {
                            $scope.speakerDataModel = $scope.$root.speaker[key][speaker];

                            $scope.openModal();
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
            $scope.showAlert();
        }
    }

    $scope.addToCalendar = function () {

        var notes = "Vortrag - ";
        for (var i = 0; i < $scope.$root.currentProgram.speakers.length; i++) {
            var speaker = $scope.$root.currentProgram.speakers[i];
            notes += speaker.AkadgradPre + " " + speaker.Vorname + " " + speaker.Name;
            if ((i + 1) !== $scope.$root.currentProgram.speakers.length) {
                notes += " | ";
            }
        }
        
        var title = "[TA0 2016] " + $scope.$root.currentProgram.TitelGER;

        console.log(notes);

        var date = new Date($scope.$root.currentProgram.Datum);

        console.log(date.getDate() + "." + date.getMonth() + "." + date.getFullYear());

        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var start_hour = parseInt($scope.$root.currentProgram.startZeit.split(":")[0]);
        var start_minute = parseInt($scope.$root.currentProgram.startZeit.split(":")[1]);
        var end_hour = parseInt($scope.$root.currentProgram.endZeit.split(":")[0]);
        var end_minute = parseInt($scope.$root.currentProgram.endZeit.split(":")[1]);

        if ($cordovaCalendar && window.cordova) {

            $cordovaCalendar.createEventInteractively({
                title: title,
                location: 'Vorklinik Uni Graz',
                notes: notes,
                startDate: new Date(year, month, day, start_hour, start_minute, 0, 0, 0),
                endDate: new Date(year, month, day, end_hour, end_minute, 0, 0, 0)
            }).then(function (result) {
                console.log("Event created successfully");
                console.log(result);
                $scope.eventAdded = true;
                dataFactory.setData($scope.$root.currentProgram.Id.toString(), $scope.eventAdded.toString());
            }, function (err) {
                console.error("There was an error: " + err);
            });
        }


    }




});
