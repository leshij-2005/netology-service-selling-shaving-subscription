saleApp
  .component('subscribe', {
    templateUrl: 'src/module/subscribe/template/index.html',
    controller: function($scope, service, CUSTOMER_EVENTS) {
      $scope.service = service;

      $scope.$on(CUSTOMER_EVENTS.selectParam, function(){
        service.update();
      });

      $scope.format = function (date) {
        var momentDate = moment(date);

        momentDate.locale('ru');

        return momentDate.format('Do MMMM YYYY');
      }
    }
  });