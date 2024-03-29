'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('AccountCtrl', function($scope, simpleLogin, fbutil, user, $location) {
    // create a 3-way binding with the user profile object in Firebase
    var profile = fbutil.syncObject(['users', user.uid]);
    profile.$bindTo($scope, 'profile');
    function resetMessages() {
      $scope.err = null;
      $scope.msg = null;
      $scope.emailerr = null;
      $scope.emailmsg = null;
    }
    // expose logout function to scope
    $scope.logout = function() {
      profile.$destroy();
      simpleLogin.logout();
      $location.path('/login');
    };

    $scope.changePassword = function(pass, confirm, newPass) {
      resetMessages();
      if( !pass || !confirm || !newPass ) {
        $scope.err = 'Please fill in all password fields';
      }
      else if( newPass !== confirm ) {
        $scope.err = 'New pass and confirm do not match';
      }
      else {
        simpleLogin.changePassword(profile.email, pass, newPass)
          .then(function() {
            $scope.msg = 'Password changed';
          }, function(err) {
            $scope.err = err;
          });
      }
    };

    $scope.clear = resetMessages;

    $scope.changeEmail = function(pass, newEmail) {
      resetMessages();
      profile.$destroy();
      simpleLogin.changeEmail(pass, newEmail)
        .then(function(user) {
          profile = fbutil.syncObject(['users', user.uid]);
          profile.$bindTo($scope, 'profile');
          $scope.emailmsg = 'Email changed';
        }, function(err) {
          $scope.emailerr = err;
        });
    };
  });
