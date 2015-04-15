(function () {

  'use strict';

  angular.module('myApp.services')

    .factory('Wood', ['$resource', function ($resource) {

      return $resource('/api/wood/:id',
        {isArray: true},
        {
          woodbytype: {
            method: 'GET',
            url: 'api/wood/:type',
            isArray: true
          }
        });


    }]);

})();

