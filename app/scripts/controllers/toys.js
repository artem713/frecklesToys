"use strict";

/**
 * @ngdoc function
 * @name frecklesToysApp.controller:CategoryCtrl
 * @description
 * # WebProjectsCtrl
 * Controller of the frecklesToysApp
 */
angular.module("frecklesToysApp")
  .controller("ToysCtrl", function ($scope, $http, $routeParams, localStorageService) {
    $scope.category = $routeParams.cat;
    var onLoaded = function(toys) {
      $scope.toys = toys;
    };
    var getFavorites = function() {
      $scope.toys = localStorageService.get("favoritesToys");
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
        getFavorites();
    }
    var addToyToLocalStorage = function(toy) {
      var favoritesToys = localStorageService.get("favoritesToys") || [];
      favoritesToys.push(toy);
      localStorageService.set("favoritesToys", favoritesToys);
    };
    var removeToyFromLocalStorage = function(toy) {
      var favoritesToys = localStorageService.get("favoritesToys");
      var indexOfToy = -1;
      var isFound = favoritesToys.some(function(item) {
        if (item.id === toy.id) {
          indexOfToy = favoritesToys.indexOf(item);
          return true;
        }
      });
      if (isFound) {
        favoritesToys.splice(indexOfToy, 1);
      }
      localStorageService.set("favoritesToys", favoritesToys);
    };
    var isToyInStorage = function(toy) {
      var favoritesToys = localStorageService.get("favoritesToys") || [];
      if (favoritesToys.length > 0) {
        var isFavorite = favoritesToys.some(function(item) {
          return item.id === toy.id;
        });
        return isFavorite;
      }
      return false;
    };
    $scope.getFavoriteToyClass = function(toy) {
      return isToyInStorage(toy) ? "favorite" : "";
    };
    $scope.addToFavorites = function(toy) {
      var favoritesToys = localStorageService.get("favoritesToys") || [];
      if (favoritesToys.length > 0) {
        var isFavorite = favoritesToys.some(function(item) {
          return item.id === toy.id;
        });
        if (isFavorite) {
          removeToyFromLocalStorage(toy);
        } else {
          addToyToLocalStorage(toy);
        }
      } else {
        addToyToLocalStorage(toy);
      }
    };
  });
