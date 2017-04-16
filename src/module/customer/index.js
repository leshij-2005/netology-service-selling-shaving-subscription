class Customer {
    constructor(variant = null, interval = null) {
        this._variant = variant;
        this._interval = interval;
    }

    get variant() {
        return this._variant;
    }

    get interval() {
        return this._interval;
    }

    selectVariant(variant) {
        this._variant = variant;
    }

    selectInterval(interval) {
        this._interval = interval;
    }
}

module.exports = Customer;