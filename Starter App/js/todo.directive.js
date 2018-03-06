function todoApp() {
    return{
        restrict: 'E',
        controller: 'ToDoController as todo',
        template: `
        <div class="todo" ng-controller="ToDoController as todo">
      <form class="todo__form" ng-submit="todo.addToDo()">
        <input type="text" placeholder="Add new ToDo!" ng-model="todo.newToDo">
      </form>
      <ul class="todo__list">
        <li ng-repeat="item in todo.list">
          <input 
            type="checkbox" 
            id="todo-{{ $index }}" 
            ng-model="item.completed"
            ng-change="todo.toggleState(item)">
          <label class="toggle" for="todo-{{ $index }}"></label>
          <p ng-dblclick="showEditField = true" ng-hide="showEditField">
            {{item.title}}
          </p>
          <div ng-show="showEditField">
            <input 
              type="text" 
              ng-model="item.title"
              ng-blur="todo.updateToDo(item,$index); showEditField = false"
              todo-autofocus="showEditField">
          </div>
          <a href-"" ng-click="todo.removeToDo(item, $index)">
            &#215;
          </a>
        </li>
      </ul>
      <p class="todo__remaining">
        <span ng-show="todo.getRemaining().length > 0">
          You have {{todo.getRemaining().length }} of {{ todo.list.length}} items to do.
        </span>
        <span ng-show="todo.getRemaining().length === 0">
          You are extremely productive!
        </span>
      </p>
    </div>
        `
    };
}

angular
    .module('app')
    .directive('todoApp', todoApp);