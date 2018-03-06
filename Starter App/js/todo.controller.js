function ToDoController(ToDoService) {
    var ctrl = this;
    ctrl.newToDo = '';
    ctrl.list = [];
    
    function getToDos() {
        ToDoService
            .retrieve()
            .then(function(response){
                ctrl.list = response;
            });
    } //getToDos

    ctrl.addToDo = function() {
        // if no todo item (empty string), do not add
        if (!ctrl.newToDo) {
            return;
        }
        ToDoService
            .create({
                title: ctrl.newToDo,
                completed: false
            })
            .then(function(response){
                ctrl.list.unshift(response);
            });
        
        ctrl.newToDo = '';
    };

    ctrl.removeToDo = function(item, index) {
        // ctrl.list.splice(index, 1);
        ToDoService
            .remove(item)
            .then(function(response){
                ctrl.list.splice(index, 1);
            });
    };

    ctrl.updateToDo = function(item, index) {
        // if there is no title property, remove item
        if (!item.title) {
            ctrl.removeToDo(item, index);
            return;
        }
        ToDoService
            .update(item);
    };
    ctrl.getRemaining = function() {
        return ctrl.list.filter(function(item){
            return !item.completed;
        });
    };
    ctrl.toggleState = function(item) {
        ToDoService
            .update(item)
            .then(function(){
                // if everything is fine, do nothing
            }, function(){
                // if something went wrong, set back to false
                item.completed = !item.completed;
            });
    };
    getToDos();
} //ToDoController

angular
    .module('app')
    .controller('ToDoController', ToDoController);