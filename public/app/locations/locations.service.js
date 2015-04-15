(function(){

  'use strict';

  angular.module('myApp.services')

    .factory('Location', ['$resource', function($resource){

      return $resource('/api/locations/:id',
        {
          getLocationNameAndDesc: {
            url: 'api/location/nameanddesc',
            method: 'GET',
            isArray: true
          }
        });

    }]);

})();

