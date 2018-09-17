(function() {
  "use strict";
  /*
    dropable list is a custom directive.
    attributes: 
        items - array of items
  */
  angular.module("appModule").directive("dropableList", function() {
    return {
      scope: {
        items: "=",
        numaricConverter: "&helper"
      },
      templateUrl: "./templates/dropableTemplate.html"
    };
  });
})();
