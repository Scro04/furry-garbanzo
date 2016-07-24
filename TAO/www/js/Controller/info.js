app.controller('infoCtrl', function ($scope, $state, $ionicHistory) {

    console.log("infoCtrl");


    $scope.sections = [

        {
            headline: "Kongressanmeldung",
            text: "Jetzt für den Kongress anmelden!",
            image: "img/icons/open_modal.png",
            state: "anmeldung"
        },
        {
            headline: "Partner",
            text: "Alle Infos zu unseren Partnern!",
            image: "img/icons/partner.png",
            state: "tab.partners"
        },
        {
            headline: "Rahmenprogramm",
            text: "Das gibt's rund um den Kongress",
            image: "img/icons/info_icon.png",
            state: "tab.rahmenprogramm"
        },
        {
            headline: "Kongresstarife",
            text: "Alle Infos zu Tickets und Ermäßigungen!",
            image: "img/icons/ticket.png",
            state: "tab.prices"
        },
         {
            headline: "Ernährungstag",
            text: 'Der g5e „5-Elemente Ernährungstag“',
            image: "img/icons/info_icon.png",
            state: "tab.ernaehrungstag"
        },
         {
            headline: "Hotelreservierung",
            text: "Sichern Sie sich Ihr Quartier!",
            image: "img/icons/bed.png",
            state: "hotel"
        },
        {
            headline: "Kontakt",
            text: "Wir stehen Ihnen gerne zur Verfügung!",
            image: "img/icons/contact.png",
            state: "tab.kontakt"
        },
        {
            headline: "Informationen",
            text: "Wichtige Details und News!",
            image: "img/icons/info_icon.png",
            state: "tab.information"
        }];


    $scope.goToState = function (state) {
        if (state === "hotel") {
            var address = "https://www.graztourismus.at/kongress/de/13-internationaler-tcm-kongress---tao_kongressformular-6253";
            $scope.openInAppBrowser(address);
        }
        else if(state === "anmeldung") {
            var address = "http://tcm-kongress.at/de/Anmeldung";
            $scope.openInAppBrowser(address);
        }
        else {
            $state.go(state);
        }
    }

    $scope.openInAppBrowser = function (address) {
        window.open = cordova.InAppBrowser.open;
        var options = "location=no,enableviewportscale=yes,clearcache=yes,toolbar=yes,closebuttoncaption=Schließen,toolbarposition=top";

        var inAppBrowser = window.open(address, "_blank", options);

        inAppBrowser.addEventListener('loaderror', function (event) {
            console.log(event.url + " kann nicht geöffnet werden.");
            showWebsiteError();
            inAppBrowser.close();
        });

    }



    $scope.goHome = function () {
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
        $state.go('home');
    }



})
