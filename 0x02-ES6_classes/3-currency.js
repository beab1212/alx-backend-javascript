export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  set code(arg) {
    this._code = arg;
  }

  get code() {
    return this._code;
  }

  set name(arg) {
    this._name = arg;
  }

  get name() {
    return this._name;
  }
}
