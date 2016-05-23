app.controller('infoCtrl', function ($scope, $state) {

    console.log("infoCtrl");


    $scope.sections = [

        {
            headline: "Informationen",
            text: "Wichtige Details und News!",
            image: "img/icons/info_icon.png",
            state: "informations"
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
            headline: "Anfahrt",
            text: "Alle Infos rund um die Anreise!",
            image: "img/icons/map_icon.png",
            state: "informations"
        },
        {
            headline: "Kongresstarife",
            text: "Alle Info's zur Teilnahme!",
            image: "img/icons/ticket.png",
            state: "informations"
        },
        {
            headline: "Kontakt",
            text: "Für weitere Informationen stehen wir gerne zur Verfügung!",
            image: "img/icons/contact.png",
            state: "informations"
        }];


    $scope.goToState = function (headline) {
        switch (headline) {
        case "Kongresstarife":
            $state.go("tab.prices");
            break;
        default:
            break;
        }
    }



})