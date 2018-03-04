function MainController(a, b) {
    a.name = 'David';
}

// MainController.$inject = ['$scope'];

angular
    .module('app')
    .controller('MainController', [
        '$scope',
        '$rootScope',
        MainController
    ]);
