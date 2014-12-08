"use strict";

/**
 * @ngdoc function
 * @name frecklesToysApp.controller:CategoryCtrl
 * @description
 * # WebProjectsCtrl
 * Controller of the frecklesToysApp
 */
angular.module("frecklesToysApp")
  .controller("ToysCtrl", function ($scope, $http, $routeParams) {
    $scope.category = $routeParams.cat;
    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var onLoaded = function(toys) {
      $scope.toys = toys;
      $scope.activeIndex = {};
      angular.forEach(toys, function(toy) {
        $scope.activeIndex[toy.id] = 0;
      });
    };
    switch ($scope.category) {
      case "felt":
        $http.get("toys/felt.json").success(onLoaded);
        break;
      case "sewed":
        $http.get("toys/sewed.json").success(onLoaded);
        break;
      case "knitted":
        $http.get("toys/knitted.json").success(onLoaded);
        break;
      default:
        return;
    }
  });
