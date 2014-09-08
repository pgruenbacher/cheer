'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.controller:FrontPageCtrl
 * @description
 * # FrontpageCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('FrontPageCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
