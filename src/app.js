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
  });