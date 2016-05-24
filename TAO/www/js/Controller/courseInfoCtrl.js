app.controller('courseInfoCtrl', function ($scope, $state, $stateParams, $ionicPopup, $ionicModal, $q, $cordovaCalendar) {

    $scope.speakerDataModel = undefined;

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

        console.log(notes);

        var date = new Date($scope.$root.currentProgram.Datum);

        console.log(date.getDate() + "." + date.getMonth() + "." + date.getFullYear());

        if ($cordovaCalendar && window.cordova) {
            var day = date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();
            var start_hour = $root.currentProgram.startZeit;
            var end_hour = $root.currentProgram.endZeit;
            $cordovaCalendar.createEventInteractively({
                title: $scope.$root.currentProgram.TitelGER,
                location: 'Vorklinik Uni Graz',
                notes: notes,
                startDate: new Date(year, month, day, 09, 0, 0, 0, 0),
                endDate: new Date(year, month, day, 10, 30, 0, 0, 0)
            }).then(function (result) {
                console.log("Event created successfully");
            }, function (err) {
                console.error("There was an error: " + err);
            });
        }


    }




});
