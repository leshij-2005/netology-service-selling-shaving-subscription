const assert = require('chai').assert;

suite('when customer want subscribe', function(){
    suite('when customer select one variant', function() {
        test('then customer given one variant', function () {
            let customer = new Customer();

            customer.select('one');

            assert.equal(customer.variant, 'one');
        });
    });

    suite('when customer selected one variant and want select two variant', function() {
        test('then customer given two variant', function () {
            let customer = new Customer('one');

            customer.select('two');

            assert.equal(customer.variant, 'two');
        });
    });
});

class Customer {
    constructor(variant = null) {
        this._variant = variant;
    }

    select(variant) {
        this._variant = variant;
    }

    get variant() {
        return this._variant;
    }
}

