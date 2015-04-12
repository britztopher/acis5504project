(function(){

  'use strict';

  angular.module('myApp.services')

    .factory('Reports', ['$resource', function($resource){

     return $resource('/api/tools');

    }]);

})();

