const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber method test', function() {
  it('integer number test for SUM', function() {
    const result = calculateNumber('SUM', 5, 3);
    assert.strictEqual(result, 8);
  });
  it('float number test for SUM', function() {
    const result = calculateNumber('SUM', 5.3, 3.6);
    assert.strictEqual(result, 9);
  });
  it('string number test for SUM', function() {
    const result = calculateNumber('SUM', '5.3', '3.6');
    assert.strictEqual(result, 9);
  });

  it('integer number test for SUBTRACT', function() {
    const result = calculateNumber('SUBTRACT', 5, 3);
    assert.strictEqual(result, 2);
  });
  it('float number test for SUBTRACT', function() {
    const result = calculateNumber('SUBTRACT', 5.3, 3.6);
    assert.strictEqual(result, 1);
  });
  it('string number test for SUBTRACT', function() {
    const result = calculateNumber('SUBTRACT', '5.3', '3.6');
    assert.strictEqual(result, 1);
  });

  it('integer number test for DIVIDE', function() {
    const result = calculateNumber('DIVIDE', 5, 3);
    assert.strictEqual(result, 1.6666666666666667);
  });
  it('float number test for DIVIDE', function() {
    const result = calculateNumber('DIVIDE', 5.3, 3.6);
    assert.strictEqual(result, 1.25);
  });
  it('string number test for DIVIDE', function() {
    const result = calculateNumber('DIVIDE', '5.3', '3.6');
    assert.strictEqual(result, 1.25);
  });
  it('division by zero test for DIVIDE', function() {
    const result = calculateNumber('DIVIDE', 5.3, 0);
    assert.strictEqual(result, 'Error');
  });
});
