'use strict';
/* Directives */
angular.module('blocksquad.directives', ['simpleLogin'])

  .directive('appVersion', ['version', function(version) {
    return function(scope, elm) {
      elm.text(version);
    };
  }])

  /**
   * A directive that shows elements only when user is logged in.
   */
  .directive('ngShowAuth', ['simpleLogin', '$timeout', function (simpleLogin, $timeout) {
    var isLoggedIn;
    simpleLogin.watch(function(user) {
      isLoggedIn = !!user;
    });

    return {
      restrict: 'A',
      link: function(scope, el) {
        el.addClass('ng-cloak'); // hide until we process it

        function update() {
          // sometimes if ngCloak exists on same element, they argue, so make sure that
          // this one always runs last for reliability
          $timeout(function () {
            el.toggleClass('ng-cloak', !isLoggedIn);
          }, 0);
        }

        update();
        simpleLogin.watch(update, scope);
      }
    };
  }])

  /**
   * A directive that shows elements only when user is logged out.
   */
  .directive('ngHideAuth', ['simpleLogin', '$timeout', function (simpleLogin, $timeout) {
    var isLoggedIn;
    simpleLogin.watch(function(user) {
      isLoggedIn = !!user;
    });

    return {
      restrict: 'A',
      link: function(scope, el) {
        function update() {
          el.addClass('ng-cloak'); // hide until we process it

          // sometimes if ngCloak exists on same element, they argue, so make sure that
          // this one always runs last for reliability
          $timeout(function () {
            el.toggleClass('ng-cloak', isLoggedIn !== false);
          }, 0);
        }

        update();
        simpleLogin.watch(update, scope);
      }
    };
  }])
  .directive('validated', function() {
  return {
    restrict: 'C',
    require: '^form',
    /*jshint loopfunc: true */
    link: function(scope, element, attrs, form) {
      var inputs = element.find('*');
      for(var i = 0; i < inputs.length; i++) {
        (function(input){
          var attributes = input.attributes;
          if (attributes.getNamedItem('ng-model') !== null && attributes.getNamedItem('name') !== null) {
            var field = form[attributes.name.value];
            if (field !== void 0) {
              scope.$watch(function() {
                return form.$submitted + '_' + field.$valid;
              }, function() {
                if (form.$submitted !== true){
                  return null;
                }
                var inp = angular.element(input);
                if (inp.hasClass('ng-invalid')) {
                  element.removeClass('has-success');
                  element.addClass('has-error');
                } else {
                  element.removeClass('has-error').addClass('has-success');
                }
              });
            }
          }
        })(inputs[i]);
      }
    }
  };
})
.directive('onValidSubmit', ['$parse', '$timeout', function($parse, $timeout) {
  return {
    require: '^form',
    restrict: 'A',
    link: function(scope, element, attrs, form) {
      form.$submitted = false;
      var fn = $parse(attrs.onValidSubmit);
      element.on('submit', function(event) {
        $timeout(function(){
          scope.$apply(function() {
            element.addClass('ng-submitted');
            form.$submitted = true;
            $timeout(function(){
              if (form.$valid && !form.$invalid) {
                if (typeof fn === 'function') {
                  fn(scope, {$event: event});
                }
              }
            },100); //100 ms delay to allow for other validator functions
          });
        },100); //100 ms delay for other $apply occurring
      });
    }
  };
}])
.directive('passwordMatch',[function(){
  return {
    restrict: 'A',
    scope:true,
    require: 'ngModel',
    link: function (scope, elem , attrs,control) {
      var checker = function () {
        //get the value of the first password
        var e1 = scope.$eval(attrs.ngModel);

        //get the value of the other password 
        var e2 = scope.$eval(attrs.passwordMatch);
        return e1 === e2;
      };
      scope.$watch(checker, function (n) {
        //set the form control to valid if both
        //passwords are the same, else invalid
        control.$setValidity('match', n);
      });
    }
  };
}]);

