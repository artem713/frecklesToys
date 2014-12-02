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
    switch ($scope.category) {
      case "felt":
        $http.get("toys/felt.json").success(function (feltToys) {
          $scope.toys = feltToys;
        });
        break;
      case "sewed":
        $http.get("toys/sewed.json").success(function (sewedToys) {
          $scope.toys = sewedToys;
        });
        break;
      case "knitted":
        $http.get("toys/knitted.json").success(function (knittedToys) {
          $scope.toys = knittedToys;
        });
        break;
      default:
        return;
    }

  });
