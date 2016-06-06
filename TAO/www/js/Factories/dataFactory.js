app.factory('dataFactory', function ($localstorage, apiFactory, $q) {
    var program = "program";
    var speaker = "speaker";
    var success = {
        "success": false
    };
    return {
        loadData: function () {
            var deferred = $q.defer();
            var obj = $localstorage.getObject("eventdata");
            if (obj == undefined) {
                obj = {};
                $localstorage.setObject("eventdata", obj);
            }

            apiFactory.getAllSpeakers().then(function (response) {
                if (response != "" && response != null) {
                    console.log(response);
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
            var obj = $localstorage.getObject("eventdata");
            obj[key] = value;
            $localstorage.setObject("eventdata", obj);
        },
        getSpeakers: function () {
            var deferred = $q.defer();
            var data = $localstorage.getObject(speaker);
            if (data != undefined) {
                deferred.resolve(data);
            }
            else {
                deferred.reject();
            }
            return deferred.promise;
        },
        getData: function (key) {
            var deferred = $q.defer();
            var data = $localstorage.getObject("eventdata");
            if (data != undefined) {
                deferred.resolve(data[key]);
            }
            else {
                deferred.reject();
            }
            return deferred.promise;
        },
        getProgram: function () {
            var deferred = $q.defer();
            var data = $localstorage.getObject(program);
            if (data != undefined) {
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
        },
        getSpeaker: function (id) {
            var defered = $q.defer();
            var elem = $localstorage.getObject("speaker");
            var result = undefined;
            for (var key in elem) {
                if (elem.hasOwnProperty(key)) {
                    for (var speaker in elem[key]) {
                        console.log(speaker);
                        if (elem[key].hasOwnProperty(speaker) && elem[key][speaker].id == id) {
                           result = elem[key][speaker];
                        }
                    }
                }
            }
            defered.resolve(result);
            return defered.promise;
        },
        getEventsForSpeaker: function (id) {
            var defered = $q.defer();
            var elem = $localstorage.getObject("program");
            var result = undefined;
            for (var key in elem) {
                if (elem.hasOwnProperty(key)) {
     
                    for (var program in elem[key]) {
                        
                        if (elem[key].hasOwnProperty(program) && elem[key][program].WorkshopId === parseInt(id)) {
                           result = elem[key][program];
                        }
                    }
                }
            }
            defered.resolve(result);
            return defered.promise;
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