app.factory('dataFactory', function ($localstorage, apiFactory, $q) {
    var program = "program";
    var speaker = "speaker";
    var success = {
        "success": false
    };
    return {
        loadData: function () {
            var deferred = $q.defer();
            apiFactory.getAllSpeakers().then(function (response) {
                if (response != "" && response != null) {
                    $localstorage.setObject(speaker, response);
                    apiFactory.getWorkshops().then(function (second_response) {
                        if (second_response != "" && second_response != null) {
                            $localstorage.setObject(program, second_response);
                            deferred.resolve();
                        } else {
                            deferred.reject();
                        }
                    }, function (error) {
                        deferred.reject();
                    })

                } else {
                    deferred.reject();
                }

            }, function (error) {
                deferred.reject();
            })

            return deferred.promise;
        },
        setData: function (key, value) {
            user_data[key] = value;
            $localstorage.setObject(user, user_data);
        },
        getSpeakers: function () {
             var deferred = $q.defer();
            var data = $localstorage.getObject(speaker);
            if(data != undefined) {
                deferred.resolve(data);
            }
            else {
                deferred.reject();
            }
            return deferred.promise;
        },
        getProgram: function () {
            var deferred = $q.defer();
            var data = $localstorage.getObject(program);
            if(data != undefined) {
                deferred.resolve(data);
            }
            else {
                deferred.reject();
            }
            return deferred.promise;
        },
        clearData: function () {
            var result = $localstorage.deleteObject(speaker);
            var result = $localstorage.deleteObject(program);
            success.success = result;
            return success;
        }
    }
});

app.factory('$localstorage', ['$window', function ($window) {
    return {

        set: function (key, value) {
            $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key) {
            return JSON.parse($window.localStorage[key] || '{}');
        },
        deleteObject: function (key) {
            var del = {};
            $window.localStorage[key] = JSON.stringify(del);
            return true;
        },
        clearStorage: function () {
            $window.localStorage.clear();
        }
    }
}]);