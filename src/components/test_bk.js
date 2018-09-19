class MessagesDirective {
  constructor() {
    this.restrict = 'E'
    this.templateUrl = 'messages.html'
    this.scope = {}
  }

  controller($scope, $state, MessagesService) {
    $scope.state = $state;
    $scope.service = MessagesService;
  }

  link(scope, element, attrs) {
    console.log('state', scope.state)
    console.log('service', scope.service)
  }
}
angular.module('messages').directive('messagesWidget', () => new MessagesDirective)


import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;