class Customer {
  constructor(data = {}) {
    const {product = null, interval = null, dates = [], subscribed = false} = data;

    this._product = product;
    this._interval = interval;
    this._dates = dates;

    this._subscribed = subscribed;
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

  get subscribed() {
    return this._subscribed;
  }

  set subscribed(subscribed) {
    this._subscribed = subscribed;
  }

  selectProduct(product) {
    this._product = product;
  }

  selectInterval(interval) {
    this._interval = interval;
  }

  selectDate(date, index = 0) {
    if (this._interval.name === 'twice a month' && this.dates[0] === date) {
      throw new Error('Dates should be different!');
    }

    this._dates[index] = date;
  }
}

module.exports = Customer;