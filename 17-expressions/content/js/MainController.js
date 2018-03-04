function MainController() {
    this.myObject = {
        one: 'Key 1',
        two: 'Key 2'
    };
    this.myArray = ['my', 'angular', 'app'];
}

angular
    .module('app')
    .controller('MainController', MainController);
