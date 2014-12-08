'use strict';

/**
 * @ngdoc function
 * @name frecklesToysApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frecklesToysApp
 */
angular.module('frecklesToysApp')
  .controller('MainCtrl', function ($scope, $http, $interval, $timeout) {
    $http.get("toys/main.json").success(function (toys) {
      $scope.toys = toys;
    });
    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    $scope.mainImage = "d_B_jvca2bw.jpg";

    /*$interval(function(){
      var randomIndex = getRandomInt(0, $scope.toys.length - 1);
      var randomToy = $scope.toys[randomIndex];
      if ($scope.mainImage === randomToy.img.name) {
        return;
      } else {
        $scope.myVar = "myClass1";
        $timeout(function() {
          $scope.myVar = "myClass2";
          $scope.mainImage = randomToy.img.name;
        }, 1000);
      }
      console.log(randomToy.img.name);
      //$scope.mainImageSrc = "#/category/" + randomToy.category + "/" + randomToy.id;
    }, 5000);*/
});
