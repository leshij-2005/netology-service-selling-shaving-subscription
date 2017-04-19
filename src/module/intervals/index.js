saleApp
  .component('intervals', {
    templateUrl: 'src/module/intervals/template/index.html',
    controller: function($scope, IntervalsService, customer) {
      $scope.items = [];

      $scope.select = function(interval) {
        customer.selectInterval(interval);

        $scope.selected = interval;
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