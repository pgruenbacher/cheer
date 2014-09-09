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
  	$scope.popup=false;
  	$scope.alert={};
    $scope.cheers=DemoService.cheers();
    console.log($scope.cheers);
    $scope.select=function(key){
		console.log($scope.cheers[key]);
		$scope.alert($scope.cheers[key]);
    };
    $scope.alert=function(cheer){
    	$scope.popup=true;
    	$scope.alert.cheer=cheer;
    };
    $scope.closeAlert=function(){
    	$scope.popup=false;
    };
  });
