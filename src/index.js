require('./libs/bootstrap/css/bootstrap.css')
import angular from 'angular'
import input from './components/input'
import angularStrap from 'angular-strap'
console.log(angular)
// angular.module('app')
//   .controller('myCtrl', function ($scope) {
//     $scope.name = "John Doe";
//     $scope.money = 10000;
//   })
angular.module('app', [input, angularStrap])
  .controller('myCtrl', function ($scope) {
    $scope.name = "wanli"
    $scope.money = 12182182
  })