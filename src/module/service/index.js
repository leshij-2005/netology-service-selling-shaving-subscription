class Service {
  constructor(customer) {
    this._cost = 0;
    this._schedule = [];
    this._today = new Date();

    if (customer) {
      this._customer = customer;

      this.calculate();
      this.createSchedule();
    }
  }

  get cost() {
    return this._cost;
  }

  get schedule() {
    return this._schedule;
  }

  get lastDeliveryDate() {
    return this._schedule[this._schedule.length - 1].date;
  }

  get nextDeliveryDate() {
    const remainingSteps = this._schedule.filter((step, idx) => {
      return step.date > this._today;
    });

    return remainingSteps[0].date;
  }

  set today(date) {
    this._today = date;
  }

  calculate() {
    let { product, interval } = this._customer;

    this._cost = product.price * interval.count;
  }

  createSchedule() {
    for (let i = 0; i <= 11; i++) {
      this._customer.dates.forEach((date, idx) => {

        let nextDate = new Date(date);
        nextDate.setMonth(date.getMonth() + i);

        this._schedule.push({
          date: nextDate
        });
      });
    }
  }
}

module.exports = Service;