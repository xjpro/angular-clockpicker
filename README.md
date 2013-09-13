angular-clockpicker
===================

![Clockpicker](/clockpicker.png "")

Clockpicker is an Angular directive that provides an intuitive way of selecting time.

###Usage###

In your controller, create an object or set of objects to contain the picked values.
```javascript
function YourController($scope) {
    $scope.time = {
      hour: 1,
      minute: 30,
      period: "am"
    };
})
```
Give those values to the clockpicker. They will be set when the user selects a time.
```
<ui-clockpicker hour="time.hour" minute="time.minute" period="time.period">
</ui-clockpicker>
```
