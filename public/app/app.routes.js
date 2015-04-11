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

            //// footer view
            //'footer@': {
            //  templateUrl: "/app/components/footer/footer.view.html"
            //}
          }
        })
    }]);


})();