module.exports = function (app) {
  app
    .directive('unorderedList', function () {
      return function (scope, element, attr) {
        var data = scope[attr['unorderedList']]
        var propertyExpression = attr['listProperty']
        if (angular.isArray(data)) {
          var listElem = angular.element('<ul>');
          element.append(listElem);
          for (var i = 0; i < data.length; i++) {
            (function () {
              var itemElement = angular.element('<li>');
              listElem.append(itemElement);
              var index = i
              var watcherFn = function (watchScope) {
                return watchScope.$eval(propertyExpression, data[index]);
              }
              scope.$watch(watcherFn, function (newValue, oldValue) {
                itemElement.text(newValue)
              })
            })()
          }
        }
      }
    })
    .controller('defaultCtrl', function ($scope) {
      $scope.products = [
        { name: 'Apples', category: 'Fruit', price: 1.20, expiry: 10 },
        { name: 'Bananas', category: 'Fruit', price: 2.42, expiry: 7 },
        { name: 'Pears', category: 'Fruit', price: 2.02, expiry: 6 }
      ]
      $scope.incrementPrices = function () {
        for (var i = 0; i < $scope.products.length; i++) {
          $scope.products[i].price++;
        }
      }
    })
}