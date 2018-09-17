(function(){
  'use strict'
/*
    To load more records.
*/
angular.module("appModule").directive("scrollMore", function() {
    return {
      restrict: "A",
      link: function(scope, element, attrs) {
        var processingScroll = false;

        var visibleHeight = element.height();
        var threshold = 100;

        element.scroll(function() {
          var scrollableHeight = element.prop("scrollHeight");
          var hiddenContentHeight = scrollableHeight - visibleHeight;
          if (hiddenContentHeight - element.scrollTop() <= threshold) {
            scope.$apply(attrs.scrollMore);
          }
        });
      }
    };
  });
})();