const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber method test', () => {
  it('integer number test', function () {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });
  it('negative number test', function() {
    const result = calculateNumber(-1, -3);
    assert.strictEqual(result, -4);
  });
  it('string number test', function() {
    const result = calculateNumber('1', '3');
    assert.strictEqual(result, 4);
  });
});
