const saleApp = angular.module('SaleApp');
const moment = require('moment');

require('moment/locale/ru');

saleApp
  .component('subscribe', {
    templateUrl: 'src/module/subscribe/template/index.html',
    controller: ($scope, service, customer, CUSTOMER_EVENTS) => {
      $scope.service = service;
      $scope.customer = customer;

      $scope.$on(CUSTOMER_EVENTS.selectParam, () => {
        service.update();
      });

      $scope.format = date => {
        const momentDate = moment(date);

        momentDate.locale('ru');

        return momentDate.format('Do MMMM YYYY');
      }

      $scope.save = () => {
        const { product, interval, dates } = customer;

        localStorage.setItem('customer', JSON.stringify({ product, interval, dates }));

        customer.subscribed = true;
      }

      $scope.getStateForItem = item => {
        let state = '';

        state = service.nextDeliveryDate === item.date ? 'next' : state;

        state = service.today > item.date ? 'overpast' : state;

        return state;
      }
    }
  });