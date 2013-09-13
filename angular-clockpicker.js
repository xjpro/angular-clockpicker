angular.module("ui.clockpicker", [])
  .controller("ClockPickerTestController", function($scope) {
    $scope.time = {
      hour: 1,
      minute: 30,
      period: "am"
    };
   })
  .directive("uiClockpicker", function() {
    return {
      restrict: "EA",
      replace: true,
      templateUrl: "template/clockpicker.html",
      scope: {
        hour: "=",
        minute: "=",
        period: "="
      },
      controller: function($scope, $element) {
        $scope.hourOptions = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
        $scope.minuteOptions = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
        $scope.periodOptions = ['am', 'pm'];
        $scope.selectionMode = true;

        $scope.selectValue = function(value) {
          $scope.selectionMode ? $scope.hour = value : $scope.minute = value;
        };
        $scope.selectPeriod = function(value) {
          $scope.period = value;
        };
        $scope.togglePeriod = function() {
          $scope.selectPeriod($scope.period == "am" ? "pm" : "am");
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
      "<a ng-click='selectionMode = false' ng-class='{selected: !selectionMode}'>{{minute}}</a> " +
      "<a ng-click='togglePeriod()'>{{period}}</a>\n" +
      "  </div>\n" +
      "  <div class='ui-clockpicker-selector' ng-class='{minute: !selectionMode}'>\n" +
      "     <ol class='ui-clockpicker-time'>\n" +
      "       <li ng-repeat='option in options' " +
      "         ng-class='{selected: selectionMode ? hour == option : minute == option }' " +
      "         ng-click='selectValue(option)'>{{option}}</li>\n" +
      "     </ol>\n" +
      "     <ol class='ui-clockpicker-period'>\n" +
      "       <li ng-repeat='periodOption in periodOptions' " +
      "         ng-class='{selected: period == periodOption }' " +
      "         ng-click='selectPeriod(periodOption)'>{{periodOption}}</li>\n" +
      "     </ol>\n" +
      "  </div>\n" +
      "</div>\n" +
      "");
  }]);