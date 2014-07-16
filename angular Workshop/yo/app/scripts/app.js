'use strict';

angular
  .module('yoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/myview', {
        templateUrl: 'views/myview.html',
        controller: 'MyviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
