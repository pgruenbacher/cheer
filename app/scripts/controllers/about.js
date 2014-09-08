'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
