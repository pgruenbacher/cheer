'use strict';

/**
 * @ngdoc directive
 * @name blocksquadApp.directive:cheerPopup
 * @description
 * # cheerPopup
 */
angular.module('blocksquadApp')
  .directive('cheerPopup', function () {
    return {
		templateUrl: 'views/partials/cheerPopup.html',
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
		}
    };
  });
