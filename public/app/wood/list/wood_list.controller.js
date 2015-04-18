(function(){

  'use strict';

  angular.module('myApp.controllers')

    .controller('WoodListCtrl', function(Wood, $state){

      var vm = this;
      vm.wood = Wood.query(function () {
        console.log('message: ', vm.wood);
      });

      vm.edit = edit;

      function edit(wood){
        $state.go('home.woodedit', {id: wood.WOOD_ID});
      }

    });

})();

