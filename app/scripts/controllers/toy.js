"use strict";

/**
 * @ngdoc function
 * @name frecklesToysApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frecklesToysApp
 */
angular.module("frecklesToysApp")
  .controller("ToyCtrl", function ($scope, $routeParams) {
    $scope.toyId = $routeParams.id;
  });
