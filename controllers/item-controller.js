(function(){
  'use strict'
/*
  Item controller which has functionality to fetch records based on list limit, searchable, cart capability
*/
angular.module("appModule").controller("itemController", [
    "$scope",
    "listLimit",
    "$filter",
    function($scope, listLimit, $filter) {
      $scope.items = [];
      $scope.cart = [];
      $scope.dataSet = [];
      var currentIndex = 0,
        todayDate = new Date();

        /*
          which will load the records upto 1000, listlimt is the limitation of records per a call
        */
      $scope.loadMoreRecords = function() {
        var list,
          i = 0;
          // checking whether current index is reached to end or not and also fetched records count should be listlimit
        while (currentIndex< 1000 && i < listLimit) {
          $scope.dataSet.push("Item " + (currentIndex+1));
          currentIndex++;
          i++;
        }

          // filtering records based on searchstring input if no value passed then it will display all the records which are in dataSet
          $scope.items = $filter("filter")($scope.dataSet, $scope.searchString);
      };


      /*
        This will trigger on each key press on seach field and it will call loadMoreRecords function to fetch matched records (no.of records limited to listlimit) 
      */
      $scope.searchItems = function() {
        while (currentIndex< 1000 && $scope.items.length < listLimit) {
          $scope.loadMoreRecords();
        }
        $scope.items = $filter("filter")($scope.dataSet, $scope.searchString);        
      };

      //initial call after loading 
      $scope.loadMoreRecords();
 
      $scope.dragAndDropListner = function(data) {
        // drag and drop is taking care by HTML (out of angular context) so forcing angular to run digest cycle (dirty check)
        $scope.$apply(function() {
          $scope.cart.push(data);
        });
      };
    }
  ]);
})();