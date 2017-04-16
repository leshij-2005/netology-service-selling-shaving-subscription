const assert = require('chai').assert;
const Customer = require('../src/module/customer');

suite('when customer want subscribe', function(){
    suite('when customer select one variant', function() {
        test('then customer given one variant', function () {
            let customer = new Customer();

            customer.selectVariant('one');

            assert.equal(customer.variant, 'one');
        });
    });

    suite('when customer selected one variant and want select two variant', function() {
        test('then customer given two variant', function () {
            let customer = new Customer('one');

            customer.selectVariant('two');

            assert.equal(customer.variant, 'two');
        });
    });

    suite('when customer select one interval', function() {
        test('then customer given one interval', function () {
            let customer = new Customer();

            customer.selectInterval('one');

            assert.equal(customer.interval, 'one');
        });
    });

    suite('when customer selected one interval and want select two interval', function() {
        test('then customer given two interval', function () {
            let customer = new Customer('one', 'one');

            customer.selectInterval('two');

            assert.equal(customer.interval, 'two');
        });
    });

    suite('when customer select date', function() {
        test('then customer given date', function () {
            let customer = new Customer();

            customer.selectDate(new Date('2017-04-25'));

            assert.equal(customer.date.toISOString(), '2017-04-25T00:00:00.000Z');
        });
    });
});

