'use strict';

/**
 * @ngdoc directive
 * @name blocksquadApp.directive:holder
 * @description
 * # holder
 */
angular.module('blocksquadApp')
  .directive('jsHolder', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        attrs.$set('data-src', attrs.jsHolder);
        Holder.run({images:element.get(0), nocss:true}); // jshint ignore:line
      }
    };
  });
