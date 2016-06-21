
app.controller('speakerDetailCtrl', function ($scope, $state, $stateParams, $ionicModal, $ionicPopup, $ionicLoading, $q, dataFactory) {

  $scope.workshopsSpeaker = [];
  $scope.workshopDataModal = undefined;


  $scope.showLoading = function () {
    $ionicLoading.show();
  };

  $scope.hideLoading = function () {
    $ionicLoading.hide();
  };


  $scope.$on("$ionicView.beforeEnter", function (scopes, states) {
    $scope.showLoading();
    $scope.getWorkshopsOfSpeaker().then(function () {
      console.log($scope.workshopsSpeaker);
      $scope.hideLoading();
    });
  });


  $ionicModal.fromTemplateUrl('templates/course-modal.html', {
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

  $scope.openWorkshopModal = function (workshop) {
    try {
      $scope.workshopDataModal = workshop;
      $scope.openModal();
    }
    catch (error) {
      console.log(error);
      $scope.showAlert();
    }
  }

  function compare(a, b) {
    var x_1 = parseInt(a.startZeit.split(":")[0]);
    var x_2 = parseInt(a.startZeit.split(":")[1]);
    var y_1 = parseInt(b.startZeit.split(":")[0]);
    var y_2 = parseInt(b.startZeit.split(":")[1]);

    if (x_1 < y_1)
      return -1;
    else if (x_1 > y_1)
      return 1;
    else {
      if (x_2 < y_2)
        return -1;
      else if (x_2 > y_2)
        return 1;
      else
        return 0;
    }

  }

  $scope.getWorkshopsOfSpeaker = function () {
    var defered = $q.defer();
    $scope.workshopsSpeaker = [];
    try {
      for (id in $scope.$root.currentSpeaker.WorkshopId) {
        var search_id = $scope.$root.currentSpeaker.WorkshopId[id];
        dataFactory.getEventsForSpeaker(search_id).then(function (res) {
          if (res != undefined) {
            $scope.workshopsSpeaker.push(res);
            $scope.workshopsSpeaker.sort(compare);
          }
        })

      }

      defered.resolve();
      return defered.promise;
    }
    catch (error) {
      console.log(error);
      $scope.showAlert();
    }
  }
});
