const assert = require('chai').assert;

suite('when customer want subscribe', function(){
    suite('when customer select one variant', function() {
        test('then customer given one variant', function () {
            let customer = new Customer();

            customer.select('one');

            assert.equal(customer.variant, 'one');
        });
    });
});

class Customer {
    constructor() {
        this._variant = null;
    }

    select(variant) {
        this._variant = variant;
    }

    get variant() {
        return this._variant;
    }
}

