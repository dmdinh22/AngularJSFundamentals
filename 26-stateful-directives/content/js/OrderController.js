function OrderController() {
    this.orderName = 'Pepsi-Cola';
    this.orderQuantity = 2;
}

angular
    .module('app')
    .controller('OrderController', OrderController);
