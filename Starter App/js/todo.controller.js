function ToDoController() {
    this.newToDo = '';
    this.list = [{
        title: 'First ToDo item',
        completed: true
    },
    {
        title: 'Second ToDo item',
        completed: false
    },
    {
        title: 'Third ToDo item',
        completed: false
    },];

    this.addToDo = function() {
        this.list.unshift({
            title: this.newToDo,
            completed: false
        });
        this.newToDo = '';
    };

    this.removeToDo = function(item, index) {
        this.list.splice(index, 1);
    };
} //ToDoController

angular
    .module('app')
    .controller('ToDoController', ToDoController)