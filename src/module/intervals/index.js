const saleApp = angular.module('SaleApp');

saleApp
  .component('intervals', {
    templateUrl: 'src/module/intervals/template/index.html',
    controller: ($rootScope, $scope, IntervalsService, customer, CUSTOMER_EVENTS) => {
      $scope.items = [];
      $scope.customer = customer;

      $scope.select = interval => {
        customer.selectInterval(interval);

        $rootScope.$broadcast(CUSTOMER_EVENTS.selectParam);
      }

      IntervalsService
        .get()
        .then(response => {
          $scope.items = response.data;
        });
    }
  })
  .factory('IntervalsService', $http => ({
    get: () => $http.get('./src/module/intervals/data.json')
  }));