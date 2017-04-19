saleApp
  .component('dates', {
    templateUrl: 'src/module/dates/template/index.html',
    controller: function($scope) {
      $scope.select = function(date) {
        console.log(date);
      };
    }
  });