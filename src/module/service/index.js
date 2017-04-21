class Service {
  constructor(customer) {
    this._cost = 0;
    this._schedule = [];
    this._today = new Date();

    if (customer) {
      this._customer = customer;

      this.update();
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
    const remainingSteps = this._schedule.filter(step => step.date > this._today);

    return remainingSteps.length ? remainingSteps[0].date : this._today;
  }

  get spentAmount() {
    const { product } = this._customer;

    const pastedSteps = this._schedule.filter(step => step.date < this._today);

    return pastedSteps.length * (product ? product.price : 0);
  }

  get today() {
    return this._today;
  }

  set today(date) {
    this._today = date;
  }

  calculate() {
    let { product = {}, interval = {} } = this._customer;

    this._cost = product.price * interval.count;
  }

  createSchedule() {
    const { dates = [], interval = {} } = this._customer;
    this._schedule = [];

    const increaseMonthBy = interval.name === 'once in two months' ? 2 : 1;

    for (let i = 0; i <= 11; i += increaseMonthBy) {
      dates.forEach(date => {
        let nextDate = new Date(date);
        nextDate.setMonth(date.getMonth() + i);

        this._schedule.push({
          date: nextDate
        });
      });
    }
  }

  update() {
    const { product, interval } = this._customer;
    if (product && interval) {
      this.calculate();
      this.createSchedule();
    }
  }
}

module.exports = Service;