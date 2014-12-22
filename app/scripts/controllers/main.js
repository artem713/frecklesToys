"use strict";

/**
 * @ngdoc function
 * @name frecklesToysApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frecklesToysApp
 */
angular.module("frecklesToysApp")
  .controller("MainCtrl", function ($scope, $http) {
		var int3d = {
      frames: 10, // The total number of images to be used as frames. The higher, the smoother your interaction will be. The default value is 10 frames.
      cursor: "move", // The CSS style to indicate what cursor will show when the user hover the object. The default value is "move"
      speed: 150, // The speed of the rotation in milliseconds delay. If you have small number of frames and the rotation seems too fast and not smooth, increase this value to 50 - 100 milliseconds delay. The default value is 0.
      entrance: false, // Entrance Animation. Toggle this to false to turn it off. The default value is true.
      preloadImages: true, // Let the script preload all the frames on initial load. Toggle this to false to turn it off. The default value is true.
      touchSupport: true, // The script support touch events for mobile phones. If this interferes with your website behaviour, you can toggle this to false. The default value is true.
      loading: "Loading..", // This only applies if preloadImages is true. This option let you show a loading indicator while the script is preloading the images. The option accepts HTML. Toggle this to false to turn this off. The default value is "Loading.."
      autoPlay: false // This option will superseded entrance option. The 3D object will start rotating automatically if autoPlay is not false. This option accepts the speed of the rotation in milliseconds delay. The default value is false.
    };
    $("#interactive_3d").interactive_3d(int3d);
    $http.get("toys/main.json").success(function (toys) {
      $scope.toys = toys;
    });
    $scope.mainImage = "d_B_jvca2bw.jpg";
});
