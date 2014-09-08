'use strict';

/**
 * @ngdoc filter
 * @name blocksquadApp.filter:interpolate
 * @function
 * @description
 * # interpolate
 * Filter in the blocksquadApp.
 */
angular.module('blocksquadApp')
	.filter('interpolate', ['version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}])
	.filter('reverse', function() {
		return function(items) {
			return items.slice().reverse();
		};
	});
