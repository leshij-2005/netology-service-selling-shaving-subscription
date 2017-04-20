const assert = require('chai').assert;
const expect = require('chai').expect;

const Customer = require('../src/module/customer');

const products = require('./fake/products');
const intervals = require('./fake/intervals');

suite('when customer want subscribe', function () {
  suite('when customer select one product', function () {
    test('then customer given one product', function () {
      let customer = new Customer();

      customer.selectProduct(products[0]);

      assert.equal(customer.product.name, 'one');
    });
  });

  suite('when customer selected one product and want select two product', function () {
    test('then customer given two product', function () {
      let customer = new Customer({product: products[0]});

      customer.selectProduct(products[1]);

      assert.equal(customer.product.name, 'two');
    });
  });

  suite('when customer select one interval', function () {
    test('then customer given delivery count 6', function () {
      let customer = new Customer();

      customer.selectInterval(intervals[0]);

      assert.equal(customer.interval.count, 6);
    });
  });

  suite('when customer selected one interval and want select monthly interval', function () {
    test('then customer given delivery count 12', function () {
      let customer = new Customer({interval: intervals[0]});

      customer.selectInterval(intervals[1]);

      assert.equal(customer.interval.count, 12);
    });
  });

  suite('when customer select date', function () {
    test('then customer given date', function () {
      let customer = new Customer({interval: intervals[0]});

      customer.selectDate(new Date('2017-04-25'), 0);

      assert.equal(customer.dates[0].toISOString(), '2017-04-25T00:00:00.000Z');
    });
  });

  suite('when customer select delivery twice a month', function () {
    test('then customer should be select two different dates', function () {
      let customer = new Customer({interval: intervals[2]});

      customer.selectDate(new Date('2017-04-02'), 0);
      customer.selectDate(new Date('2017-04-27'), 1);

      assert.equal(customer.dates[1].toISOString(), '2017-04-27T00:00:00.000Z');
    });
  });

  suite('when customer select delivery twice a month and select two identical dates', function () {
    test('then customer given error', function () {
      let customer = new Customer({interval: intervals[2]});
      let date = new Date('2017-04-02');

      customer.selectDate(date, 0);

      expect(() => customer.selectDate(date, 0)).to.throw(/Dates should be different!/);
    });
  });
});

