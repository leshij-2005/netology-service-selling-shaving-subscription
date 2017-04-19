saleApp
  .component('products', {
    templateUrl: 'src/module/products/template/index.html',
    controller: function($scope, ProductsService) {
      $scope.items = [];

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