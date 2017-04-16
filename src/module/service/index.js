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

module.exports = Service;