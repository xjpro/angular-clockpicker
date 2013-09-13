angular-clockpicker
===================

![Clockpicker](/screenshot.png "")

Clockpicker is an Angular directive that provides an intuitive way of selecting time. 

Usage: 

```javascript
function YourController($scope) {
    $scope.time = {
      hour: 1,
      minute: 30,
      period: "am"
    };
})
```html
<ui-clockpicker hour="time.hour" minute="time.minute" period="time.period">
</ui-clockpicker>
```
