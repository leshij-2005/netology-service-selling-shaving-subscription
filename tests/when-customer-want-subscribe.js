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
});

