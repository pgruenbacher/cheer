'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
