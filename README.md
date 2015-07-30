angular-clockpicker
===================

![Clockpicker](/clockpicker.png "")

Clockpicker is an Angular directive that provides an intuitive way of selecting time.

###Usage###

In your controller, create a Date object to store the time.
```javascript
function YourController($scope) {
    $scope.time = new Date();
})
```
Give that value to the clockpicker to be set when the user selects a time.
```
<clockpicker ng-model="time">
</clockpicker>
```
