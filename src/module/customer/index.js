class Customer {
    constructor(variant = null, interval = null) {
        this._variant = variant;
        this._interval = interval;
        this._dates = [];
    }

    get variant() {
        return this._variant;
    }

    get interval() {
        return this._interval;
    }

    get dates() {
        return this._dates;
    }

    selectVariant(variant) {
        this._variant = variant;
    }

    selectInterval(interval) {
        this._interval = interval;
    }

    selectDate(date) {
        if (this._interval === 'twice a month' && this.dates[0] === date) {
            throw new Error('Dates should be different!');
        }

        this._dates.push(date);
    }
}

module.exports = Customer;