
app.controller('speakerDetailCtrl', function ($scope, $state, $stateParams, $ionicModal, $ionicPopup, $ionicLoading, $q) {

  $scope.workshopsSpeaker = [];
  $scope.workshopDataModal = undefined;


  $scope.showLoading = function() {
    $ionicLoading.show();
  };

  $scope.hideLoading = function(){
    $ionicLoading.hide();
  };


  $scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {
    $scope.showLoading();
    $scope.getWorkshopsOfSpeaker($scope.$root.currentSpeaker.id).then(function()
    {
        $scope.hideLoading();
    });
  });


  $ionicModal.fromTemplateUrl('templates/course-modal.html', {
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

  $scope.openWorkshopModal = function(workshop)
  {
    try {
      $scope.workshopDataModal = workshop;
      $scope.openModal();
    }
    catch(error)
    {
      console.log(error);
      $scope.showAlert();
    }
  }

  $scope.getWorkshopsOfSpeaker = function(referentId)
  {
    var defered = $q.defer();
    $scope.workshopsSpeaker = [];
    try {
      for(id in $scope.$root.currentSpeaker.WorkshopId) {
        for (var key in $scope.$root.program) {
          if ($scope.$root.program.hasOwnProperty(key)) {
            for (var program in $scope.$root.program[key]) {
              if ($scope.$root.program[key].hasOwnProperty(program) && $scope.$root.program[key][program].WorkshopId != null && $scope.$root.program[key][program].WorkshopId == $scope.$root.currentSpeaker.WorkshopId[id]) {
                $scope.workshopsSpeaker.push($scope.$root.program[key][program]);
              }
            }
          }
        }
      }
      defered.resolve();
      return defered.promise;
    }
    catch(error)
    {
      console.log(error);
      $scope.showAlert();
    }
  }
});
