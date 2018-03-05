function MainController() {
    this.person = {
        name: 'David Dinh',
        location: 'California, United States'
    };
}

angular
    .module('app')
    .controller('MainController', MainController);
