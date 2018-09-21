import angular from 'angular'
import templete from './templete.html'
import angularStrap from 'angular-strap'
export default angular.module('sasac.ui.input', [angularStrap])
  .directive('thousandInput', function () {
    return {
      restrict: "EA",
      template: templete,
      scope: {
        val: "="
      },
      // scope: true,
      link: function ($scope, element, attr) {
        console.log($scope)
        $scope.tooltip = {
          "title": $scope.val
        };
        $scope.$watch('tooltip.title', function (newValue, oldValue) {
          $scope.val = newValue
        });
      }
    }
  }).name