(function(){

  'use strict';

  angular.module('myApp.services')

    .factory('Home', ['$resource', function($resource){

     return $resource('/api/tools');

    }]);

})();

