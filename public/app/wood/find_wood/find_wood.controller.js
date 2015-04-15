(function(){

  'use strict';

  angular.module('myApp.controllers')

    .controller('FindWoodCtrl', ['Wood', 'WoodType', '$http',
      function(Wood, WoodType, $http){

      var vm = this;

      vm.woodtype = WoodType.query(function(){
        console.log('message: ', vm.woodtype);
      });

      vm.selected = undefined;


      vm.onSelect=onSelect;

      function onSelect($item, $model, $label){

        console.log('selected model: ', $model);

        vm.woods = Wood.woodbytype({type: $model}, function(){
          console.log('woods: ', vm.woods);
        });
      }
    }]);

})();

