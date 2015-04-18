(function(){

  'use strict';

  angular.module('myApp.controllers')

    .controller('FindWoodCtrl', ['Wood', 'WoodType', '$http',
      function(Wood, WoodType, $http){

      var vm = this;

      vm.woodtype = WoodType.query(function(){
        console.log('wood types: ', vm.woodtype);
      });

      vm.selected = undefined;


      vm.onSelect=onSelect;

      function onSelect($item, $model, $label){

        console.log('selected model: ', Wood);

        $http.get('/api/wood/type/'+$model)
          .success(function(response){
            console.log('wood by type resp: ', response);
              vm.woods = response;
          })
          .error(function(reason){
            console.log('COULD NOT GET WOOD BY TYPE: ', reason);
          });

      }
    }]);

})();

