let saleApp = angular.module('SaleApp', ['ngMaterial']);

saleApp
  .component('main', {
    templateUrl: 'src/template/app.html',
    controller: function($scope) {}
  })
  .config(function($mdDateLocaleProvider){
    $mdDateLocaleProvider.formatDate = function(date) {
      return moment(date).format('DD.MM.YYYY');
    };

    moment.locale('ru');
  })
  .factory('customer', function(){
    return new Customer();
  })
  .factory('service', function(customer){
    return new Service(customer);
  })
  .constant('CUSTOMER_EVENTS', {
    selectParam: 'customer-select-param'
  });