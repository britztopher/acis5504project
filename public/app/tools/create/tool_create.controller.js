(function () {

  'use strict';

  angular.module('myApp.controllers')

    .controller('ToolCreateCtrl', function ($log, Tools, Location) {

      var vm = this;

      vm.searchText = null;
      vm.selectedItem = null;
      vm.toolType = null;
      vm.locations = Location.query();
      vm.newTool = new Tools({});
      vm.newTool.SHOP_ID = 1;


      vm.toolTypes = ['Power Tool', 'Hand Tool'];

      vm.setToolType = setToolType;
      vm.querySearch = querySearch;
      vm.searchTextChange = searchTextChange;
      vm.selectedItemChange = selectedItemChange;
      vm.saveTool = saveTool;



      function querySearch(query) {

        var results = query ? vm.locations.filter( createFilterFor(query) ) : [];

        return results;
      }

      function setToolType(selected) {

        if (selected === 'Power Tool') {

          vm.newTool.TOOL_TYPE_ID = 1;
        } else {
          vm.newTool.TOOL_TYPE_ID = 2;
        }
      }

      function setLocation(selected) {

        console.log('message: ', selected);
      }

      function searchTextChange(text) {
        $log.info('Text changed to ' + text);
      }

      function selectedItemChange(item) {
        $log.info('Item changed to ' + item);

        vm.newTool.LOCATION_ID = item.LOCATION_ID;

      }

      function saveTool(){
        vm.newTool.$save();
      }
      /**
       * Create filter function for a query string
       */
      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(location) {

          return (location.LOCATION_NAME.toLowerCase().indexOf(lowercaseQuery) === 0);
        };

      }


    });

})();

