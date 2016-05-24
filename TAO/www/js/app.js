// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.constant('ApiEndpoint', {
    url: 'http://192.168.0.18:8100/'
})

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.program', {
        url: '/program',
        views: {
            'tab-program': {
                templateUrl: 'templates/tab-program.html',
                controller: 'programCtrl'
            }
        }
    })

    .state('tab.referenten', {
            url: '/referenten',
            views: {
                'tab-referenten': {
                    templateUrl: 'templates/tab-referenten.html',
                    controller: 'referentenCtrl'
                }
            }
        })
        .state('tab.anfahrt', {
            url: '/anfahrt',
            views: {
                'tab-anfahrt': {
                    templateUrl: 'templates/tab-anfahrt.html',
                    controller: 'anfahrtCtrl'
                }
            }
        })

    .state('tab.info', {
            url: '/info',
            views: {
                'tab-info': {
                    templateUrl: 'templates/tab-info.html',
                    controller: 'infoCtrl'
                }
            }
        })
        .state('tab.courseInfo', {
            url: '/courseInfo',
            views: {
                'tab-program': {
                    templateUrl: 'templates/courseDetail.html',
                    controller: 'courseInfoCtrl'
                }
            }
        })
        .state('tab.speakerDetail', {
            url: '/speaker',
            views: {
                'tab-referenten': {
                    templateUrl: 'templates/speakerDetail.html',
                    controller: 'speakerDetailCtrl'
                }
            }
        })
        .state('tab.prices', {
            url: '/prices',
            views: {
                'tab-info': {
                    templateUrl: 'templates/prices.html',
                    controller: 'pricesCtrl'
                }
            }
        })
      .state('tab.information', {
        url: '/information',
        views: {
          'tab-info': {
            templateUrl: 'templates/information.html',
            controller: 'informationCtrl'
          }
        }
      })
      .state('tab.kontakt', {
        url: '/kontakt',
        views: {
          'tab-info': {
            templateUrl: 'templates/kontakt.html',
            controller: 'kontaktCtrl'
          }
        }
      });

    console.log("otherwise");
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');

    //Set tab position
    $ionicConfigProvider.tabs.position('bottom');

});
