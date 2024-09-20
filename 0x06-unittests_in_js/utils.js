class Utils {
  static calculateNumber(type, a, b) {
    const bRounded = Math.round(b);
    const aRounded = Math.round(a);
    let result = 0;
    switch (type) {
      case 'SUM':
        result = aRounded + bRounded;
        break;
      case 'SUBTRACT':
        result = aRounded - bRounded;
        break;
      case 'DIVIDE':
        if (bRounded === 0) {
          result = 'Error';
        } else {
          result = aRounded / bRounded;
        }
        break;
      default:
        break;
    }
    return result;
  }
}

module.exports = Utils;
