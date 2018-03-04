function ToDoController() {
    this.list = [{
        title: 'First ToDo item',
        completed: false
    },
    {
        title: 'Second ToDo item',
        completed: false
    },
    {
        title: 'Third ToDo item',
        completed: false
    },]
} //ToDoController

angular
    .module('app')
    .controller('ToDoController', ToDoController)