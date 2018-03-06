function stretch() {
    return {
        restrict: 'A', // A === attribute, E === element
        link: function ($scope, $element, $attrs) {
            var element = $element[0]; // jqlite element -> index 0 === raw DOM element
            element.addEventListener('focus', function () { // focus listener
                this.style.width = '250px';
            });
            element.addEventListener('blur', function () { // blur listener
                this.style.width = '120px';
            });
        }
    };
}

angular
    .module('app')
    // my-stretch in element -> 'myStretch' in directive param
    .directive('stretch', stretch);
