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
    $scope.carouselIdex={};
    $scope.cheers=DemoService.cheers();
    $scope.demo={
      0:{
        title:'Vote on Trends',
        message:'Put more stuff here'
      },
      1:{
        title:'Data Demonstration',
        message:'Phones are connected to the cloud database. Each textmessage is sent and received using real-time synchronization'
      },
      2:{
        title:'Icon Customization',
        message:'Put more stuff here'
      },
      3:{
        title:'Card Stunts',
        message:'Put more stuff here'
      }
    };
    var ref = new Firebase(FBURL+'/demo/texts'); //jshint ignore:line
    var sync = $firebase(ref.limit(5));
    $scope.texts = sync.$asArray();
    console.log($scope.cheers);
    $scope.data.disableClick=function(bool){
      $scope.disable=bool;
      console.log('disable',bool);
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
      console.log('send',message,sender);
      console.log($scope.first,$scope.second);
      $scope.texts.$add({message:message,sender:sender});
    };
    $scope.textingIndicator=function(texter,bool){
      console.log(texter);
      texter.texting=bool;
    };
  });
