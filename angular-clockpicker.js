angular.module("ui.clockpicker", [])
  .directive("clockpicker", function() {
    return {
      replace: true,
      templateUrl: "template/clockpicker.html",
      controller: function($scope, $element) {
        $scope.hourOptions = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
        $scope.minuteOptions = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
        
        $scope.selectionMode = true;
        $scope.hour = $scope.hourOptions[0];
        $scope.minute = $scope.minuteOptions[0];
        
        $scope.selectValue = function(value) {
          $scope.selectionMode ? $scope.hour = value : $scope.minute = value;
        };
        $scope.$watch("selectionMode", function(value) {
          $scope.options = value ? $scope.hourOptions : $scope.minuteOptions;
        });
      }
    };
  })
  .run(["$templateCache", function($templateCache) {
    $templateCache.put("template/clockpicker.html",
      "\n" +
      "<div class='ui-clockpicker'>\n" +
      "  <div class='ui-clockpicker-selection'>\n" +
      "    <a ng-click='selectionMode = true' ng-class='{selected: selectionMode}'>{{hour}}</a>:" +
      "<a ng-click='selectionMode = false' ng-class='{selected: !selectionMode}'>{{minute}}</a> pm\n" +
      "  </div>\n" +
      "  <div class='ui-clockpicker-selector' ng-class='{minute: !selectionMode}'>\n" +
      "     <ol>" +
      "       <li " +
      "         ng-repeat='option in options' " +
      "         ng-class='{selected: selectionMode ? hour == option : minute == option }' " +
      "         ng-click='selectValue(option)'>{{option}}</li>" +
      "     </ol>" +
      "  </div>\n" +
      "</div>\n" +
      "");
  }]);