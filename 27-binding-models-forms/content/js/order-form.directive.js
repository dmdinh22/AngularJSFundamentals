function orderForm() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            data: '=', // 2 way data binding
            submit: '&' //delegate functions
        },
        controller: 'OrderFormController as form',
        template: `
        <form name="orderForm" novalidate ng-submit="form.onSubmit()">
          <input name="name" required="" type="text" ng-model="form.data.name" placeholder="Your name">
          <div
            ng-show="orderForm.name.$error.required && orderForm.name.$touched">
            Name is required!
          </div>
          <input name="email" required="" type="email" ng-model="form.data.email" placeholder="Your email">
          <div
            ng-show="orderForm.email.$error.required && orderForm.email.$touched">
            Email is required!
          </div>
          <div
            ng-show="orderForm.email.$error.email && orderForm.email.$touched">
            Email is invalid!
          </div>
          <input name="location" required="" type="text" ng-model="form.data.location" placeholder="Your location">
          <select
            name="orderChoice"
            required=""
            ng-model="form.data.product"
            ng-options="product.label for product in form.products">
            <option value="">Select...</option>
          </select>
          <textarea name="comments" placeholder="Any messages (optional)" ng-model="form.data.comments"></textarea>
          <button type="submit" ng-disabled="orderForm.$invalid">
            Order
          </button>
        </form>
        <pre>{{ form.data | json}}</pre>
        <pre>{{ orderForm.orderChoice | json}}</pre>
      `
    };
} //<pre> {{ orderForm.orderChoice | json}} </pre> checks only orderChoice inputs

angular
    .module('app')
    .directive('orderForm', orderForm);
