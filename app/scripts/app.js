'use strict';

/**
 * @ngdoc overview
 * @name frecklesToysApp
 * @description
 * # frecklesToysApp
 *
 * Main module of the application.
 */
var app = angular.module('frecklesToysApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/category/:cat', {
        templateUrl: 'views/toys.html',
        controller: 'ToysCtrl'
      })
      .when('/category/:cat/:id', {
        templateUrl: 'views/toy.html',
        controller: 'ToyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.directive("aboutFt", function(){
  return {
    restrict: "E",
    templateUrl: "views/aboutFt.html"
  };
});
