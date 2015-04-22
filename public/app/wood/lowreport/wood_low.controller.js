(function () {

  'use strict';

  angular.module('myApp.controllers')

    .controller('WoodLowCtrl', function ($state, $http) {

      var vm = this;

      vm.woods = {};


      $http.get('/api/wood/quantity/low')
        .success(function (resp) {

          vm.woods = resp;
          console.log('lowwood respoonese: ', resp);

        })


    });

})();

