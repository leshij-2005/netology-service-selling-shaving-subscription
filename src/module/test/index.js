saleApp
  .component('test', {
    templateUrl: 'src/module/test/template/index.html',
    controller: function($scope, service) {
      $scope.today = new Date();

      $scope.set = function(date) {
        service.today = date;

        service.update();
      };
    }
  });