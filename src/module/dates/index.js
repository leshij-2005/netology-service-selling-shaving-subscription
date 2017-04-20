saleApp
  .component('dates', {
    templateUrl: 'src/module/dates/template/index.html',
    controller: function($rootScope, $scope, customer, CUSTOMER_EVENTS) {
      $scope.customer = customer;

      $scope.select = function(date, index = 0) {
        customer.selectDate(date, index);

        $rootScope.$broadcast(CUSTOMER_EVENTS.selectParam);
      };
    }
  });