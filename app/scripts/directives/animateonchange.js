'use strict';

/**
 * @ngdoc directive
 * @name blocksquadApp.directive:animateOnChange
 * @description
 * # animateOnChange
 */
angular.module('blocksquadApp').
  directive('animateOnChange', function($animate) {
  	return{
  		restrict: 'A',
  		link: function postLink(scope, elem, attr) {
	      scope.$watch(attr.animateOnChange, function(nv,ov) {
	        if (nv!==ov) {
	    		console.log('change');
	          var c = 'fade';
	          $animate.addClass(elem,c, function() {
	          	elem.removeClass(c);
	          });
	        }
	      });
	   }
	};
});
