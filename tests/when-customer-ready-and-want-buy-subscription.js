const assert = require('chai').assert;
const Customer = require('../src/module/customer');

const products = require('./fake/products');
const intervals = require('./fake/intervals');

suite('when customer selected params and wants to buy a subscription', function(){
    suite('when customer select one product and delivery once in two months', function() {
        test('then the subscription cost is 6$', function () {
            let customer = new CustomerBuilder()
                .withProduct(products[0])
                .withIntervalOnceInTwoMonths()
                .ready();

            const service = new Service(customer);

            assert.equal(service.cost, 6);
        });
    });
});

class CustomerBuilder {
    constructor() {
        this._product = null;
        this._interval = null;
    }

    withProduct(product) {
        this._product = product;

        return this;
    }

    withIntervalOnceInTwoMonths() {
        this._interval = intervals[0];

        return this;
    }

    ready() {
        return new Customer({
            product: this._product,
            interval: this._interval
        });
    }
}

class Service {
    constructor(customer) {
        this._cost = 0;

        if (customer) {
            this._customer = customer;

            this.calculate();
        }
    }

    get cost() {
        return this._cost;
    }

    calculate() {
        let { product, interval } = this._customer;

        this._cost = product.price * interval.count;
    }
}