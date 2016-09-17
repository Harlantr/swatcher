'use strict';

angular.module('swatcher', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/color/:hex', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/color/000000'
      });
  });