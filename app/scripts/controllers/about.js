'use strict';

/**
 * @ngdoc function
 * @name frecklesToysApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frecklesToysApp
 */
angular.module('frecklesToysApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
