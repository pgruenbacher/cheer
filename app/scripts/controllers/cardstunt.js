'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.controller:CardstuntctrlCtrl
 * @description
 * # CardstuntctrlCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('cardStuntCtrl', function ($scope) {
  	var i=0,j,k,l;
    $scope.tabs=[{
    		title:'0',
    		rows: []
    	}];
    $scope.pushTab=function(){
    	i++;
    	$scope.tabs.push({title:i});
    };
    $scope.changeSize=function(x,y){
    	for(j=0; j<$scope.tabs.length; j++){
    		$scope.tabs[j]={rows:[]};
    		for(k=0; k<x; k++){
    			$scope.tabs[j].rows.push({columns:[]});
    			for(l=0; l<y; l++){
    				$scope.tabs[j].rows[k].columns.push({
    					color: 'red',
    					duration: 3
    				});
    			}
    		}
    	}
	console.log($scope.tabs);
	console.log($scope.tabs[0].rows);
    };
  });
