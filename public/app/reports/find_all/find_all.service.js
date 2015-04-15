(function(){

  'use strict';

  angular.module('myApp.services')

    .factory('Report', ['$resource', function($resource){

     return $resource('/api/report',
       {
         findallreport: {
           url: '/api/report/findall',
           method: 'GET',
           isArray: true
         }
       });

    }]);

})();

