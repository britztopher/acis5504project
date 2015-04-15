(function(){

  'use strict';

  angular.module('myApp.controllers')

    .controller('WoodListCtrl', function(Wood){

      var vm = this;

      vm.wood = Wood.query(function () {

      });

    });

})();

