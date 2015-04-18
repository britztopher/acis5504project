(function () {

  'use strict';

  angular.module('myApp.controllers')

    .controller('ToolEditCtrl', function (Tools, Tool, $http, $state) {

      var vm = this;

      vm.toolTypes = ['Power Tool', 'Hand Tool'];

      vm.tool = Tools.get({id: $state.params.id})

      console.log('Tool on Deck: ', vm.tool);
      vm.updateTool = updateTool;
      vm.deleteTool = deleteTool;

      function deleteTool(){

          console.log('got tool: ', vm.tool);

        $http.delete('/api/tools/delete/'+vm.tool.TOOL_ID)
          .success(function(response){
            console.log('response: ', response);
            $state.go('home.toollist');
          })

      }

      function updateTool(){

        $http.post('/api/tools/update', {tool: vm.tool})
          .success(function(resp){
            console.log('tool respo: ', resp);
            $state.go('home.toollist');
          })

      }


    });

})();

