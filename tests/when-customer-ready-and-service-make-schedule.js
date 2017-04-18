const assert = require('chai').assert;

const Service = require('../src/module/service');

const CustomerBuilder = require('./dsl/customerBuilder');

suite('when customer selected params and service make schedule', function () {
  suite('when customer select delivery monthly and delivery day 18.05.2017', function () {
    let customer = new CustomerBuilder()
      .withOneProduct()
      .withIntervalMonthly()
      .withDates([new Date('2017-05-18')])
      .ready();

    const service = new Service(customer);

    test('then last date in schedule is 18.04.2018', function () {
      assert.equal(service.lastDeliveryDate.toISOString(), '2018-04-18T00:00:00.000Z');
    });

    test('then schedule steps count is 12', function () {
      assert.equal(service.schedule.length, 12);
    });

    suite('when service set today 01.06.2017', function () {
      test('then next date schedule is 18.06.2017', function () {
        service.today = new Date('2017-06-01');

        assert.equal(service.nextDeliveryDate.toISOString(), '2017-06-18T00:00:00.000Z');
      });
    });
  });

  suite('when customer select delivery twice a month and delivery day 08.05.2017 and 22.05.2017', function () {
    let customer = new CustomerBuilder()
      .withOneProduct()
      .withIntervalTwiceAMonth()
      .withDates([new Date('2017-05-08'), new Date('2017-05-22')])
      .ready();

    const service = new Service(customer);

    test('then last date in schedule is 22.04.2018', function () {
      assert.equal(service.lastDeliveryDate.toISOString(), '2018-04-22T00:00:00.000Z');
    });

    test('then schedule steps count is 24', function () {
      assert.equal(service.schedule.length, 24);
    });

    suite('when service set today 01.06.2017', function () {
      test('then next date schedule is 08.06.2017', function () {
        service.today = new Date('2017-06-01');

        assert.equal(service.nextDeliveryDate.toISOString(), '2017-06-08T00:00:00.000Z');
      });
    });
  });

  suite('when customer select delivery once in two months and delivery day 08.05.2017', function () {
    let customer = new CustomerBuilder()
      .withOneProduct()
      .withIntervalOnceInTwoMonths()
      .withDates([new Date('2017-05-08')])
      .ready();

    const service = new Service(customer);

    test('then last date in schedule is 08.03.2018', function () {
      assert.equal(service.lastDeliveryDate.toISOString(), '2018-03-08T00:00:00.000Z');
    });

    test('then schedule steps count is 6', function () {
      assert.equal(service.schedule.length, 6);
    });

    suite('when service set today 01.06.2017', function () {
      test('then next date schedule is 08.07.2017', function () {
        service.today = new Date('2017-06-01');

        assert.equal(service.nextDeliveryDate.toISOString(), '2017-07-08T00:00:00.000Z');
      });
    });
  });
});