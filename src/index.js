var angular = require('angular');
var app = angular.module('app', [])
app.controller('myCtrl', function ($scope) {
  $scope.name = "John Doe";
})