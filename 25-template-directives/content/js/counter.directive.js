function counter() {
    return {
        scope: {}, // isolate the scope
        restrict: 'E', // custom element <counter>
        //controllerAs: counter,
        controller: 'CounterController as counter', // set controller for component
        template: `
          <div class="counter">
            <input type="text" ng-model="counter.count">
            <button type="button" ng-click="counter.decrement();">
              -
            </button>
            <button type="button" ng-click="counter.increment();">
              +
            </button>
          </div>
        ` // template of directive - packaged html
    };
}

angular
    .module('app')
    .directive('counter', counter);
