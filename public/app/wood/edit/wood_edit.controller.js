(function () {

  'use strict';

  angular.module('myApp.controllers')

    .controller('WoodEditCtrl', function (Wood, $http, $state) {

      var vm = this;
      console.log('message: ', $state.params);

      vm.wood = Wood.get({id: $state.params.id}, function(){

      });

      //vm.Tool = Tools.get({id: vm.tool.TOOL_ID}, function(){
      //  console.log('got tool: ', vm.Tool);
      //});

      //vm.tool.location = vm.tool.LOCATI ON_NAME

      console.log('Tool on Deck: ', vm.tool);
      vm.updateWood = updateWood;
      vm.deleteWood = deleteWood;


      function deleteWood(){

        console.log('got wood: ', vm.wood);

        $http.delete('/api/wood/delete/'+vm.wood.WOOD_ID)
          .success(function(response){
            console.log('response: ', response);
            $state.go('home.woodlist');
          })

      }

      function updateWood(){

        $http.post('/api/wood/update', {wood: vm.wood})
          .success(function(resp){
            $state.go('home.woodlist');
          })

      }


    });

})();

