function MainController($scope) { // inject scope via Dependency Injection
    $scope.name = 'David'; // bind public property to make it available in html
    $scope.likes = ['pizza', 'coke'];
}

angular
    .module('app')
    .controller('MainController', MainController);
