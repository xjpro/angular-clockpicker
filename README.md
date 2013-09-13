angular-clockpicker
===================
Clockpicker is an Angular directive that provides an intuitive way of selecting time. 

Usage: 

function YourController($scope) {
    $scope.time = {
      hour: 1,
      minute: 30,
      period: "am"
    };
})

<ui-clockpicker hour="time.hour" minute="time.minute" period="time.period">
</ui-clockpicker>
