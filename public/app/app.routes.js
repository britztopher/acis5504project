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
        .primaryPalette('light-blue', {
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
        .state('home.tool', {
          url: 'tool',

          views: {

            'reports@home': {
              templateUrl: 'app/tools/tools.view.html'
            }
          }
        })
        .state('home.findtools', {
          url: 'findtools',

          views: {

            'reports@home': {
              templateUrl: 'app/tools/find_tools/find_tools.view.html',
              controller: 'FindToolCtrl as vm'
            }
          }
        }).state('home.toollist', {
          url: 'toollist',

          views: {

            'reports@home': {
              templateUrl: 'app/tools/list/tools_list.view.html',
              controller: 'ToolListCtrl as vm'
            }
          }
        })
        .state('home.createTool', {
          url: 'toolcreate',

          views: {

            'reports@home': {
              templateUrl: 'app/tools/create/tool_create.view.html',
              controller: 'ToolCreateCtrl as vm'
            }
          }
        })
        .state('home.tooledit', {
          url: 'tooledit/:id',

          views: {

            'reports@home': {
              templateUrl: 'app/tools/edit/tool_edit.view.html',
              controller: 'ToolEditCtrl as vm'
            }
          }
        })
        .state('home.findwood', {
          url: 'findwood',

          views: {

            'reports@home': {
              templateUrl: 'app/wood/find_wood/find_wood.view.html',
              controller: 'FindWoodCtrl as vm'
            }
          }
        }).state('home.woodlist', {
          url: 'woodlist',

          views: {

            'reports@home': {
              templateUrl: 'app/wood/list/wood_list.view.html',
              controller: 'WoodListCtrl as vm'
            }
          }
        }).state('home.woodedit', {
          url: '/woodedit/:id',

          views: {

            'reports@home': {
              templateUrl: 'app/wood/edit/wood_edit.view.html',
              controller: 'WoodEditCtrl as vm'
            }
          }
        }).state('home.woodlow', {
          url: '/woodlowquantity',

          views: {

            'reports@home': {
              templateUrl: 'app/wood/lowreport/wood_low.view.html',
              controller: 'WoodLowCtrl as vm'
            }
          }
        })
    }]);


})();