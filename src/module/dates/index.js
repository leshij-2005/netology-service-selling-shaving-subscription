const saleApp = angular.module('SaleApp');
const moment = require('moment');

require('moment/locale/ru');

saleApp
  .component('dates', {
    templateUrl: 'src/module/dates/template/index.html',
    controller: ($rootScope, $scope, customer, CUSTOMER_EVENTS) => {
      $scope.today = new Date();
      $scope.minSecondDate = new Date();

      $scope.firstDate = customer.dates[0];
      $scope.secondDate = customer.dates[1];

      $scope.customer = customer;

      $scope.select = (date, index = 0) => {
        customer.selectDate(date, index);

        $rootScope.$broadcast(CUSTOMER_EVENTS.selectParam);

        if (!index) {
          $scope.minSecondDate = moment($scope.firstDate).add(1, 'days').toDate();
        }
      };
    }
  });