'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.decorator:Ngcloakdirective
 * @description
 * # Ngcloakdirective
 * Decorator of the blocksquadApp
 */
angular.module('blocksquadApp')
.config(['$provide', function($provide) {
// adapt ng-cloak to wait for auth before it does its magic
$provide.decorator('ngCloakDirective', ['$delegate', 'simpleLogin',
  function($delegate, simpleLogin) {
    var directive = $delegate[0];
    // make a copy of the old directive
    var _compile = directive.compile;
    directive.compile = function(element, attr) {
      simpleLogin.getUser().then(function() {
        // after auth, run the original ng-cloak directive
        _compile.call(directive, element, attr);
      });
    };
    // return the modified directive
    return $delegate;
  }]);
}]);
