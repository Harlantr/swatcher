'use strict';

angular.module('swatcher', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/color/', {
            templateUrl: 'views/color.html',
            controller: 'colorCtrl'
        })
        .when('/palette/', {
            templateUrl: 'views/palette.html',
            controller: 'paletteCtrl'
        })
        .otherwise({
            redirectTo: '/color/'
        });

    $locationProvider.html5Mode(true)
    });