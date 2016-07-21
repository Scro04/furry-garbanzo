app.factory('apiFactory', function ($http, $ionicPlatform, ApiEndpoint) {
    var urlBase = "";
    //if (window.cordova) {
    // running on device/emulator
    urlBase = 'http://api.codeshaped.at/tao/';
    //}
    /*else {
        urlBase = ApiEndpoint.url;
    }*/
    var speakers = [];

    //$http.defaults.headers.common['Authorization'] = 'M9PEVE8PjvPryiYjKTmLUqeYpLxnAdshfdEr';
    /*
    $http.defaults.headers.common = {
        Authorization: '' + "window.btoa("development:d3vt34m")"
    };
    $http.defaults.headers.get = {
        Authorization: '' + window.btoa("development:d3vt34m")
    };
    */
    return {
        getAllSpeakers: function () {
            return $http({
                method: 'GET',
                url: urlBase + 'speakers',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        //'Authorization': "Basic M9PEVE8PjvPryiYjKTmLUqeYpLxnAdshfdEr"
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                console.log(error);
                return error.data;
            });
        },
        getWorkshops: function () {
            return $http({
                method: 'GET',
                url: urlBase + 'workshops',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        //'Authorization': "Basic M9PEVE8PjvPryiYjKTmLUqeYpLxnAdshfdEr"
                }
            }).then(function (response) {
                console.log(response.data);
                return response.data;
            }, function (error) {
                console.log(error);
                return error.data;
            });
        },
        getPrices: function () {
            return $http({
                method: 'GET',
                url: urlBase + 'prices',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        //'Authorization': "Basic M9PEVE8PjvPryiYjKTmLUqeYpLxnAdshfdEr"
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                console.log(error);
                return error;
            });
        },
        getPartners: function () {
            return $http({
                method: 'GET',
                url: urlBase + 'exhibitors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        //'Authorization': "Basic M9PEVE8PjvPryiYjKTmLUqeYpLxnAdshfdEr"
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                console.log(error);
                return error;
            });
        }
    }
});