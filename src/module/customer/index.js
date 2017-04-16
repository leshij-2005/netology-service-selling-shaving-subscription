class Customer {
    constructor(data = {}) {
        const { product = null, interval = null, dates = [] } = data;

        this._product = product;
        this._interval = interval;
        this._dates = dates;
    }

    get product() {
        return this._product;
    }

    get interval() {
        return this._interval;
    }

    get dates() {
        return this._dates;
    }

    selectProduct(product) {
        this._product = product;
    }

    selectInterval(interval) {
        this._interval = interval;
    }

    selectDate(date) {
        if (this._interval.name === 'twice a month' && this.dates[0] === date) {
            throw new Error('Dates should be different!');
        }

        this._dates.push(date);
    }
}

module.exports = Customer;