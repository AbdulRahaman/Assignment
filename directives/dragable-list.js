(function(){
  'use strict'
/*
    dragable list is a custom directive. Which will display a list of items based on fetch/load limit configured with listLimit dependency
*/
angular.module("appModule").directive("dragableList", function() {
    return {
      templateUrl: "./templates/dragableTemplate.html"
    };
  });
})();