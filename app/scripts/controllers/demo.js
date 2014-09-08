'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('DemoCtrl', function ($scope,DemoService) {
    $scope.cheers=DemoService.cheers();
    console.log($scope.cheers);
  });
