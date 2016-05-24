app.controller('infoCtrl', function ($scope, $state) {

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
            state: "informations"
        },
        {
            headline: "Kongresstarife",
            text: "Alle Info's zur Teilnahme!",
            image: "img/icons/ticket.png",
            state: "tab.prices"
        },
        {
            headline: "Kontakt",
            text: "Für weitere Informationen stehen wir gerne zur Verfügung!",
            image: "img/icons/contact.png",
            state: "informations"
        }];


    $scope.goToState = function (state) {

            $state.go(state);

    }



})
