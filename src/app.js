require('angular');
require('angular-aria');
require('angular-animate');
require('angular-material');

const moment = require('moment');

const saleApp = angular.module('SaleApp', ['ngMaterial']);

const Customer = require('./module/customer');
const Service = require('./module/service');

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
    var data = localStorage.getItem('customer');
    var customer = {};
    var subscribed = false;

    if (data) {
       customer = JSON.parse(data);
       subscribed = true;
    }

    customer.dates = customer.dates.map(function(date) {
      return new Date(date);
    });

    const { product, interval, dates } = customer;

    return new Customer({ product, interval, dates, subscribed });
  })
  .factory('service', function(customer){
    return new Service(customer);
  })
  .constant('CUSTOMER_EVENTS', {
    selectParam: 'customer-select-param'
  });

require('./module/products');
require('./module/intervals');
require('./module/dates');
require('./module/subscribe');
require('./module/test');