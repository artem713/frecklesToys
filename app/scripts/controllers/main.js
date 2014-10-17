'use strict';

/**
 * @ngdoc function
 * @name frecklesToysApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frecklesToysApp
 */
angular.module('frecklesToysApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
