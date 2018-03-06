function todoAutofocus(){
    return {
        restrict: 'A',
        scope: false,
        link: function($scope, $element, $attrs) {
            $scope.$watch($attrs.todoAutofocus, function(newValue, oldValue){
                if (!newValue) {
                    return;
                }
                setTimeOut(function(){ // setTimeout to push event to end of callstack
                    element[0].focus(); // call focus method on native dom object
                }, 0);
            });
        }
    };
}

angular
    .module('app')
    .directive('todoAutofocus', todoAutofocus)