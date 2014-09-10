'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('DemoCtrl', function ($scope,DemoService,$firebase,FBURL) {
  	$scope.popup=false;
    $scope.disable=false;
  	$scope.alert={};
    $scope.data={};
    $scope.first={};
    $scope.second={};
    $scope.cheers=DemoService.cheers();
    var ref = new Firebase(FBURL+'/demo/texts'); //jshint ignore:line
    var sync = $firebase(ref.limit(14));
    $scope.texts = sync.$asArray();
    console.log($scope.cheers);
    $scope.data.disableClick=function(bool){
      $scope.disable=bool;
      console.log('disable',bool);
    };
    $scope.data.customFunction=function(){
      return 'fuck you too';
    };
    $scope.enableClick=function(){
      $scope.disable=true;
      console.log('disable','trueee');
    };
    $scope.select=function(key){
      if(!$scope.disable){
        console.log($scope.cheers[key]);
        $scope.alert($scope.cheers[key]);
      }
    };
    $scope.alert=function(cheer){
    	$scope.popup=true;
    	$scope.alert.cheer=cheer;
    };
    $scope.closeAlert=function(){
    	$scope.popup=false;
    };
    $scope.send=function(message,sender){
      console.log($scope.first,$scope.second);
      $scope.texts.$add({message:message,sender:sender});
    };

  });
