app.controller('infoCtrl', function ($scope, $state, $ionicHistory) {

    console.log("infoCtrl");


    $scope.sections = [

        {
            headline: "Informationen",
            text: "Wichtige Details und News!",
            image: "img/icons/info_icon.png",
            state: "tab.information"
        },
        {
            headline: "Partner",
            text: "Alle Infos zu unseren Partnern!",
            image: "img/icons/partner.png",
            state: "partners"
        },
        {
            headline: "Hotelreservierung",
            text: "Sichern Sie sich Ihr Quartier!",
            image: "img/icons/bed.png",
            state: "hotel"
        },
        {
            headline: "Kongresstarife",
            text: "Alle Info's zur Teilnahme!",
            image: "img/icons/ticket.png",
            state: "tab.prices"
        },
        {
            headline: "Kontakt",
            text: "Wir stehen Ihnen gerne zur Verfügung!",
            image: "img/icons/contact.png",
            state: "tab.kontakt"
        }];


    $scope.goToState = function (state) {
        if (state === "hotel") {
            var options = {
                enableViewportScale: 'yes',
                location: 'no',
                clearcache: 'yes',
                toolbar: 'yes'
            };

            var address = "https://www.graztourismus.at/kongress/de/13-internationaler-tcm-kongress---tao_kongressformular-6253"
            var inAppBrowser = window.open(address, "_blank", "location=no,enableviewportscale=yes");

            inAppBrowser.addEventListener('loaderror', function (event) {
                console.log(event.url + " kann nicht geöffnet werden.");
                showWebsiteError();
                inAppBrowser.close();
            });

            return;
        }
        else {
            $state.go(state);
        }


    }


    $scope.goHome = function () {
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
        $state.go('home');
    }



})
