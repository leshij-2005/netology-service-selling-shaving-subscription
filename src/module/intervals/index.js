saleApp
  .component('intervals', {
    templateUrl: 'src/module/intervals/template/index.html',
    controller: function($scope, IntervalsService) {
      $scope.items = [];

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