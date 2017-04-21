const saleApp = angular.module('SaleApp');

saleApp
  .component('test', {
    templateUrl: 'src/module/test/template/index.html',
    controller: ($scope, service) => {
      $scope.today = new Date();

      $scope.set = date => {
        service.today = date;

        service.update();
      };
    }
  });