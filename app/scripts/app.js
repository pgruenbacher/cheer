'use strict';

/**
 * @ngdoc overview
 * @name blocksquadApp
 * @description
 * # blocksquadApp
 *
 * Main module of the application.
 */
angular
  .module('blocksquadApp', [
    'blocksquad.config',
    'blocksquad.directives',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'mgcrea.ngStrap',
    'firebase',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'simpleLogin',
    'angular-momentum-scroll-custom',
    'angular-carousel'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app',{
      url:(''),
      abstract:true,
      template:'<ui-view></ui-view>',
      controller:'AppCtrl'
    })
    .state('app.frontpage',{
      url:'/frontpage',
      abstract:true,
      templateUrl:'views/frontpage.html',
      controller:'FrontPageCtrl'
    })
    .state('app.frontpage.home', {
      url:'/home',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('app.frontpage.about',{
      url:'/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('app.frontpage.demo',{
      url:'/demo',
      templateUrl:'views/demo.html',
      controller:'DemoCtrl'
    });
    $urlRouterProvider.otherwise('/frontpage/home');
  });
