(function(){

  'use strict';

  angular.module('myApp.controllers')

    .controller('FindToolCtrl', function(Tools){

      var vm = this;

      vm.tools = Tools.query(function () {
        console.log('TOols', vm.tools);
      });

      vm.selected = undefined;


      vm.onSelect=onSelect;

      function onSelect($item, $model, $label){

        console.log('selected model: ', $model);
        vm.selected = $item;
        console.log('selected label: ', $label);

      }

    });

})();

