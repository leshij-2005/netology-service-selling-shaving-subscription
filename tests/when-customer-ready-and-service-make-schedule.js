const assert = require('chai').assert;

const Service = require('../src/module/service');

const CustomerBuilder = require('./dsl/customerBuilder');

suite('when customer selected params and service make schedule', function () {
  suite('when customer select delivery monthly and delivery day 18.05.2017', function () {
    test('then last date in schedule is 18.05.2018', function () {
      let customer = new CustomerBuilder()
        .withOneProduct()
        .withIntervalOnceInTwoMonths()
        .withDates([new Date('2017-05-18')])
        .ready();

      const service = new Service(customer);

      assert.equal(service.lastDeliveryDate.toISOString(), '2018-04-18T00:00:00.000Z');
    });
  });
});