'use strict';
/*jshint unused: vars*/
/**
 * @ngdoc function
 * @name blocksquadApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('AppCtrl', function ($scope,simpleLogin) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
  });
