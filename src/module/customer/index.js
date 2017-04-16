class Customer {
    constructor(variant = null, interval = null) {
        this._variant = variant;
        this._interval = interval;
        this._date = null;
    }

    get variant() {
        return this._variant;
    }

    get interval() {
        return this._interval;
    }

    get date() {
        return this._date;
    }

    selectVariant(variant) {
        this._variant = variant;
    }

    selectInterval(interval) {
        this._interval = interval;
    }

    selectDate(date) {
        this._date = date;
    }
}

module.exports = Customer;