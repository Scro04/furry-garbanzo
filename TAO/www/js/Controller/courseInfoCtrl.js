app.controller('courseInfoCtrl', function ($scope, $state, $stateParams, $ionicPopup, $ionicModal) {

  $scope.speakerDataModel = undefined;


  $ionicModal.fromTemplateUrl('templates/speaker-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });


  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Ein Fehler ist aufgetreten!',
      template: 'Leider konnte der Speaker nicht gefunden werden, bitte versuchen Sie es später erneut, vielen Dank!'
    });
  };

  $scope.openSpeakerModal = function(referentId)
  {
    try {
      for (var key in $scope.$root.speaker) {
        if ($scope.$root.speaker.hasOwnProperty(key)) {
          for (var speaker in $scope.$root.speaker[key]) {
            if ($scope.$root.speaker[key].hasOwnProperty(speaker) && $scope.$root.speaker[key][speaker].id != null && $scope.$root.speaker[key][speaker].id == referentId) {
              $scope.speakerDataModel = $scope.$root.speaker[key][speaker];
              console.log($scope.speakerDataModel);
              $scope.openModal();
            }
          }
        }
      }
    }
    catch(error)
    {
      console.log(error);
      $scope.showAlert();
    }
  }

  $scope.getWorkshopsOfSpeaker = function(referentId)
  {
    $scope.workshopsSpeaker = [];
    try {
      for(workshopId in $scope.speakerDataModel.WorkshopId) {
        for (var key in $scope.$root.program) {
          if ($scope.$root.speaker.hasOwnProperty(key)) {
            for (var program in $scope.$root.program[key]) {
              if ($scope.$root.speaker[key].hasOwnProperty(program)) {


              }
            }
          }
        }
      }
    }
    catch(error)
    {
      console.log(error);
      $scope.showAlert();
    }
  }

});
