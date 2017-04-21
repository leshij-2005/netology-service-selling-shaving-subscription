const saleApp = angular.module('SaleApp');

saleApp
  .component('products', {
    templateUrl: 'src/module/products/template/index.html',
    controller: ($rootScope, $scope, ProductsService, customer, CUSTOMER_EVENTS) => {
      $scope.items = [];
      $scope.customer = customer;

      $scope.select = product => {
        customer.selectProduct(product);

        $rootScope.$broadcast(CUSTOMER_EVENTS.selectParam);
      };

      ProductsService
        .get()
        .then(response => {
          $scope.items = response.data;
        });
    }
  })
  .factory('ProductsService', $http => ({
    get: () => $http.get('./src/module/products/data.json')
  }));