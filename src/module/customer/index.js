class Customer {
    constructor(variant = null) {
        this._variant = variant;
    }

    selectVariant(variant) {
        this._variant = variant;
    }

    get variant() {
        return this._variant;
    }
}

module.exports = Customer;