(function () {

  'use strict';

  angular.module('myApp.controllers')

    .controller('ToolEditCtrl', function (Tools, Tool, $http) {

      var vm = this;

      vm.toolTypes = ['Power Tool', 'Hand Tool'];

      vm.tool = Tool.getTool();

      //vm.Tool = Tools.get({id: vm.tool.TOOL_ID}, function(){
      //  console.log('got tool: ', vm.Tool);
      //});

      //vm.tool.location = vm.tool.LOCATI ON_NAME

      console.log('Tool on Deck: ', vm.tool);
      vm.updateTool = updateTool;


      function updateTool(){
        vm.tool.SHOP_ID = 1;

        $http.post('/api/tools/update', {tool: vm.tool})
          .success(function(resp){
            console.log('tool respo: ', resp);
          })

      }
      

    });

})();

