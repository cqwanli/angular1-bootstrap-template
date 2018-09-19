require('./libs/bootstrap/css/bootstrap.css')
require('angular')
var unorderedList = require('./components/unorderedList')
import home from './components/home'
import input from './components/input'
var uiBootstrap = require('angular-ui-bootstrap')
// var buttons = require('angular-ui-bootstrap/src/buttons');
var app = angular.module('app', [uiBootstrap, home, input])
app.controller('myCtrl', function ($scope) {
  $scope.name = "John Doe";
  $scope.money = 10000;
})
unorderedList(app)