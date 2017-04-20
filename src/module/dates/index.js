saleApp
  .component('dates', {
    templateUrl: 'src/module/dates/template/index.html',
    controller: function($scope, customer) {
      $scope.customer = customer;

      $scope.select = function(date, index = 0) {
        customer.selectDate(date, index);
      };
    }
  });