const Customer = require('../../src/module/customer');

const products = require('../fake/products');
const intervals = require('../fake/intervals');

class CustomerBuilder {
    constructor() {
        this._product = null;
        this._interval = null;
    }

    withOneProduct() {
        this._product = products[0];

        return this;
    }

    withIntervalOnceInTwoMonths() {
        this._interval = intervals[0];

        return this;
    }

    withIntervalMonthly() {
        this._interval = intervals[1];

        return this;
    }

    withIntervalTwiceAMonth() {
        this._interval = intervals[2];

        return this;
    }

    ready() {
        return new Customer({
            product: this._product,
            interval: this._interval
        });
    }
}

module.exports = CustomerBuilder;