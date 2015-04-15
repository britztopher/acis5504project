(function(){

  'use strict';

  angular.module('myApp.services')

    .factory('Tools', ['$resource', function($resource){

     return $resource('/api/tools/:id',
       {
         updateTools: {
           url: '/api/tools/update',
           method: 'POST'
         }
       }
     );

    }])
    .factory('Tool', function(){
      var tool;

      var service =  {
        getTool: getTool,
        setTool: setTool
      }

      return service;


      function getTool(){
        return tool;
      }

      function setTool(_tool_){
        tool = _tool_;
      }
    })

})();

