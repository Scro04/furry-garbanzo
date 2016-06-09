app.controller('programCtrl', function ($scope, $state, dataFactory, $ionicPopup, $ionicHistory, $ionicModal) {
  $scope.data = undefined;
  $scope.listData = [];
  $scope.lastIndex = 0;
  $scope.filterDay = "";

  if (window != undefined && window.innerWidth < 700) {
    setTimeout(function () {
      jQuery('ion-nav-view[nav-view="active"] .btn-switch').addClass("button-small");
    }, 50);
  }

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
      dataFactory.getProgram().then(function (data) {
        $scope.data = data;
        $scope.switchList(1);

      }, function () {
        $scope.showAlert();
      })
    }
  });

  $scope.switchList = function (key) {
    $scope.filter_enabled = false;
    var i = 1;
    $scope.lastIndex = key;
    for (var k in $scope.data) {
      if (i === key) {
        $scope.listData = $scope.data[k];
        break;
      }
      i = i + 1;
    }

    var str = 'ion-nav-view[nav-view="active"] #btn-' + key;
    var str_2 = 'ion-nav-view[nav-view="active"] .btn-switch';
    setTimeout(function () {
      jQuery(str_2).removeClass("active");
      jQuery(str).addClass("active");
    }, 50);

  }

  /* ------------------------------------- */
  /*                FILTER                 */
  /* ------------------------------------- */
  $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Fehler!',
            template: 'Bitte wählen Sie einen Veranstaltungstyp aus.',
            buttons: [{
                text: 'OK',
                type: 'button-assertive'
            }]
        })
    }
  
  $scope.startFilter = function (options) {
    try {
      //check values
      if (options == undefined || (options.name == "" && !(options.name).trim()) && options.vortrag
      && options.workshop) {
        $scope.closeFilter();
      } else {

        if(options.vortrag === options.workshop && !options.vortrag) {
          scope.$showAlert();
          return;
        }

        if(options.name != "" && (options.name).trim()) {
          $scope.listData = $scope.listData.filter(function (entry) {
            var speaker = entry.speakers[0].Vorname + " " + entry.speakers[0].Name;
            speaker = speaker.toLowerCase();
            return speaker.indexOf(options.name.toLowerCase()) > -1 } );
        }
        
        if(options.vortrag != options.workshop) {
          if(options.vortrag) {
            $scope.listData = $scope.listData.filter(function (entry) {
              return entry.type === 1 } );
          }
          else {
            $scope.listData = $scope.listData.filter(function (entry) {
              return entry.type === 0 } );
          }
          
        }


        $scope.filter_enabled = true;

        $scope.options = {
          name: "",
          vortrag: true,
          workshop: true
        };

        $scope.modal.hide();
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  $scope.options = {
    name: "",
    vortrag: true,
    workshop: true
  };

  $ionicModal.fromTemplateUrl('templates/filterModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal
  })

  $scope.openFilter = function () {
    switch($scope.lastIndex) {
      case 1:
        $scope.filterDay = "Do 22.9.";
        break;
      case 2:
        $scope.filterDay = "Fr 23.9.";
        break;
      case 3:
        $scope.filterDay = "Sa 24.9.";
        break;
      default:
        break;
    }
    $scope.modal.show()
  }

  $scope.disableFilter = function () {
    console.log("disable");
    $scope.filter_enabled = false;
    $scope.switchList($scope.lastIndex);
    $scope.options = {
      name: "",
      vortrag: true,
      workshop: true
    };

  }

  $scope.closeFilter = function () {
    $scope.options = {
      name: "",
      vortrag: true,
      workshop: true
    };

    $scope.modal.hide();
  };

  $scope.goToDetail = function (entry) {
    $scope.$root.currentProgram = entry;
    $state.go('tab.courseInfo');
  }


  $scope.goHome = function () {
    $ionicHistory.clearHistory();
    $ionicHistory.nextViewOptions({
      historyRoot: true
    });
    $state.go('home');
  }
});
