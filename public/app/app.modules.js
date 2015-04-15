angular.module('common.directives', []);
angular.module('myApp.services', []);
angular.module('myApp.controllers', ['myApp.services', 'common.directives']);
