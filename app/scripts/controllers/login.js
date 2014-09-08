'use strict';

/**
 * @ngdoc function
 * @name blocksquadApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the blocksquadApp
 */
angular.module('blocksquadApp')
  .controller('LoginCtrl', function ($scope,simpleLogin,$location,FBURL) {
   	$scope.email = null;
    $scope.password = null;
    $scope.confirm = null;
    $scope.createMode = false;
    $scope.data={};
    var fb = new Firebase(FBURL); //jshint ignore:line
    function errMessage(err) {
      return angular.isObject(err) && err.code? err.code : err + '';
    }
    function isDuplicateEmail(email, callback) {
      fb.child('email_index').child(escapeEmail(email)).once('value', function(snap) {
        var exists=(snap.val()!== null);
        console.log($scope);
        callback(exists);
      });
    }
    function createEmailIndex(email,userId){
      fb.child('email_index/'+escapeEmail(email)).set({uid:userId});
    }     
    function escapeEmail(email) {
      return (email || '').replace('.', ',');
    }
    $scope.login = function() {
      $scope.err = null;
      if(assertValidAccountProps()){
        simpleLogin.login($scope.email, $scope.password)
        .then(function(/* user */) {
          $location.path('/account');
        }, function(err) {
          $scope.err = errMessage(err);
        });
      }
    };
    $scope.checkEmail=function(){
      var email=$scope.email;
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(email)){
        isDuplicateEmail(email,function(exists){
          console.log(exists);
          $scope.data.exists=exists;
          $scope.$apply();
        });
      }
    };
    $scope.createAccount = function() {
      console.log('create account');
      $scope.err = null;
      if( assertValidAccountProps() ) {
        if(!$scope.data.exists){
          simpleLogin.createAccount($scope.email, $scope.password)
          .then(function(user) {
            console.log('account created',user);
            createEmailIndex(user.email,user.uid);
            $location.path('/account');
          }, function(err) {
            $scope.err = errMessage(err);
          });
        }
      }
    };

    function assertValidAccountProps() {
      if( !$scope.email ) {
        $scope.err = 'Please enter an email address';
      }
      else if( !$scope.password || !$scope.confirm ) {
        $scope.err = 'Please enter a password';
      }
      else if( $scope.createMode && $scope.password !== $scope.confirm ) {
        $scope.err = 'Passwords do not match';
      }
      return !$scope.err;
    }
  });
