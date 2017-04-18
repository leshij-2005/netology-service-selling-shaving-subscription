const assert = require('chai').assert;

const Service = require('../src/module/service');

const CustomerBuilder = require('./dsl/customerBuilder');

suite('when customer selected params and wants to buy a subscription', function () {
  suite('when customer select one product with price is 1$ and delivery once in two months', function () {
    test('then the subscription cost is 6$', function () {
      let customer = new CustomerBuilder()
        .withOneProduct()
        .withIntervalOnceInTwoMonths()
        .ready();

      const service = new Service(customer);

      assert.equal(service.cost, 6 * 1);
    });
  });

  suite('when customer select one product with price is 1$ and delivery monthly', function () {
    test('then the subscription cost is 12$', function () {
      let customer = new CustomerBuilder()
        .withOneProduct()
        .withIntervalMonthly()
        .ready();

      const service = new Service(customer);

      assert.equal(service.cost, 12 * 1);
    });
  });

  suite('when customer select one product with price is 1$ and delivery twice a month', function () {
    test('then the subscription cost is 24$', function () {
      let customer = new CustomerBuilder()
        .withOneProduct()
        .withIntervalTwiceAMonth()
        .ready();

      const service = new Service(customer);

      assert.equal(service.cost, 24 * 1);
    });
  });
});