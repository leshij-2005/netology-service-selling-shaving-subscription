saleApp
  .component('subscribe', {
    templateUrl: 'src/module/subscribe/template/index.html',
    controller: function($scope, service, customer, CUSTOMER_EVENTS) {
      $scope.service = service;
      $scope.customer = customer;

      $scope.$on(CUSTOMER_EVENTS.selectParam, function(){
        service.update();
      });

      $scope.format = function (date) {
        var momentDate = moment(date);

        momentDate.locale('ru');

        return momentDate.format('Do MMMM YYYY');
      }

      $scope.save = function() {
        const { product, interval, dates } = customer;

        localStorage.setItem('customer', JSON.stringify({ product, interval, dates }));

        customer.subscribed = true;
      }
    }
  });