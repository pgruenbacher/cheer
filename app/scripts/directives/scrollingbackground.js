'use strict';
/* jshint unused:vars */
/**
 * @ngdoc directive
 * @name blocksquadApp.directive:scrollingBackground
 * @description
 * # scrollingBackground
 */
angular.module('blocksquadApp')
  .directive('scrollingBackground', function () {
    return {
      template: '<div class="scrolling-background"><div></div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var speed = 80;
	    var pos = 0;
	    var child=element.children(1);
	    function bgScroll(){
	    	console.log('scroll');
	        pos += 1;
	        child.css({backgroundPosition: pos + 'px '+0+'px'});
		}
		setInterval(bgScroll, speed);
      }
    };
  });
