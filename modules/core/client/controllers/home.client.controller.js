(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);
  HomeController.$inject = ['$scope'];
  function HomeController($scope) {
    var vm = this;
    $scope.maps = "";
  }
}());
