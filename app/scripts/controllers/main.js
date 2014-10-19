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
  	var alt = "Игрушки от Веснушки";
    $scope.mainImages = [{
    	"src": "http://cs617226.vk.me/v617226514/1f4d3/gf8r-m08Djc.jpg",
    	"alt": alt
    }, {
    	"src": "http://cs605426.vk.me/v605426565/7d2e/HKBAHFnHyrA.jpg",
    	"alt": alt
    }, {
    	"src": "http://cs616630.vk.me/v616630565/14b42/GhtDsLFCvYE.jpg",
    	"alt": alt
    }];
  });
