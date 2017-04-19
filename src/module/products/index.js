saleApp
  .component('products', {
    templateUrl: 'src/module/products/template/index.html',
    controller: function($scope, ProductsService, customer) {
      $scope.items = [];

      $scope.select = function(product) {
        customer.selectProduct(product);

        $scope.selected = product;
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