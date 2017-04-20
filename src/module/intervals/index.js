saleApp
  .component('intervals', {
    templateUrl: 'src/module/intervals/template/index.html',
    controller: function($rootScope, $scope, IntervalsService, customer, CUSTOMER_EVENTS) {
      $scope.items = [];

      $scope.select = function(interval) {
        customer.selectInterval(interval);

        $scope.selected = interval;

        $rootScope.$broadcast(CUSTOMER_EVENTS.selectParam);
      }

      IntervalsService
        .get()
        .then(function(response) {
          $scope.items = response.data;
        });
    }
  })
  .factory('IntervalsService', function($http) {
    return {
      get: function() {
        return $http.get('./src/module/intervals/data.json');
      }
    }
  });