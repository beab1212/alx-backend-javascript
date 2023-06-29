export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.check();
  }
  check() {
    if (typeof(this.evacuationWarningMessge !== 'function')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(arg) {
    if (typeof(arg) != "number") {
      throw Error();
    }
    this._sqft = arg;
  }

  get sqft() {
    return this._sqft;
  }
}

