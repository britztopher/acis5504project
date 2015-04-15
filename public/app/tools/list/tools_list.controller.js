(function(){

  'use strict';

  angular.module('myApp.controllers')

    .controller('ToolListCtrl', function(Tools, Tool, $state){

      var vm = this;

      vm.edit = edit;

      vm.tools = Tools.query(function () {
        console.log('TOols', vm.tools);
      });

      function edit(tool){

        Tool.setTool(tool);

        $state.go('home.tooledit');
      }


    });

})();

