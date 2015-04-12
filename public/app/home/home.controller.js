(function () {

  'use strict';

  angular.module('myApp.controllers')

    .controller('HomeCtrl', function (Home) {

      var vm = this;

      vm.getTools = getTools;

      function getTools() {
        var tools = Home.query(function () {
          console.log('TOols', tools);
        });
      };

      vm.helloSpanish = "Buenos Dias!"

    });

})();

