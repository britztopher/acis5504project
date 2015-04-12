(function () {

  'use strict';

// Declare app level module which depends on filters, and services

  angular.module('myApp', [
    'myApp.controllers',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'ngMaterial',
    'ngAria',
    'ngResource',
    'angulartics',
    'angulartics.google.analytics'

  ])
    .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('grey', {
          'default': '300'
        })
        .accentPalette('deep-orange', {
          'default': '500'
        });
    })
    .config(['$stateProvider', '$urlRouterProvider', '$logProvider', function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: '/',

          views: {

            '@': {
              templateUrl: 'app/home/home.view.html',
              controller: 'HomeCtrl as vm'
            }
          }
        })
        .state('home.reports', {
          url: '/reports/:type',

          views: {

            '@': {
              templateUrl: 'app/reports/reports.view.html',
              controller: 'ReportCtrl as vm'
            }
          }
        })
    }]);


})();