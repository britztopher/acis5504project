(function () {

  'use strict';

  angular.module('myApp.services')

    .factory('WoodType', ['$resource', function ($resource) {

      return $resource('/api/woodtype/:id');


    }]);

})();

