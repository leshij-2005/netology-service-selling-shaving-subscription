saleApp
  .component('products', {
    templateUrl: 'src/module/products/template/index.html',
    controller: function($rootScope, $scope, ProductsService, customer, CUSTOMER_EVENTS) {
      $scope.items = [];
      $scope.customer = customer;

      $scope.select = function(product) {
        customer.selectProduct(product);

        $rootScope.$broadcast(CUSTOMER_EVENTS.selectParam);
      };

      ProductsService
        .get()
        .then(function(response) {
          $scope.items = response.data;
        });
    }
  })
  .factory('ProductsService', function($http) {
    return {
      get: function() {
        return $http.get('./src/module/products/data.json');
      }
    }
  });