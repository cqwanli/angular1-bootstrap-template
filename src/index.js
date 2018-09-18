require('./libs/bootstrap/css/bootstrap.css')
require('angular')
var unorderedList = require('./components/unorderedList')
import home from './components/home'
var uiBootstrap = require('angular-ui-bootstrap')
// var buttons = require('angular-ui-bootstrap/src/buttons');
var app = angular.module('app', [uiBootstrap, home])
app.controller('myCtrl', function ($scope) {
  $scope.name = "John Doe";
})
unorderedList(app)