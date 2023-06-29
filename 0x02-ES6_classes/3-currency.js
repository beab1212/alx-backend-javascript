export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  
  set code(arg) {
    if (typeof(arg) != "string") {
      throw Error();
    }
    this._code = arg;
  }

  get code() {
    return this._code;
  }

  set name(arg) {
    if (typeof(arg) != "string") {
      throw Error();
    }
    this._name = arg;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
