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
  it(`checking if numbers round`, function() {
    const res = calculateNumber(1.6, 2.7);
    assert.strictEqual(res, 5);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(-1.6, -1.7);
    assert.strictEqual(res, -4);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(-1.4, -1.3);
assert.strictEqual(res, -2);
  });
});
