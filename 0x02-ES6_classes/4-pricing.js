import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(arg) {
    if (typeof(arg) != "number") {
      throw Error();
    }
    this._amount = arg;
  }

  get amount() {
    return this._amount;
  }

  set currency(arg) {
    if (typeof(arg) != "object") {
      throw Error();
    }
    this._currency = arg;
  }

  get amount() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
