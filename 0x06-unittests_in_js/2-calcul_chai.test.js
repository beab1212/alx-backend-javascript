const { describe, it } = require('mocha');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber method test', () => {
  it('integer number test for SUM', () => {
    const result = calculateNumber('SUM', 5, 3);
    expect(result).to.equal(8);
  });
  it('float number test for SUM', () => {
    const result = calculateNumber('SUM', 5.3, 3.6);
    expect(result).to.equal(9);
  });
  it('string number test for SUM', () => {
    const result = calculateNumber('SUM', '5.3', '3.6');
    expect(result).to.equal(9);
  });

  it('integer number test for SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 5, 3);
    expect(result).to.equal(2);
  });
  it('float number test for SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 5.3, 3.6);
    expect(result).to.equal(1);
  });
  it('string number test for SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', '5.3', '3.6');
    expect(result).to.equal(1);
  });

  it('integer number test for DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 5, 3);
    expect(result).to.equal(1.6666666666666667);
  });
  it('float number test for DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 5.3, 3.6);
    expect(result).to.equal(1.25);
  });
  it('string number test for DIVIDE', () => {
    const result = calculateNumber('DIVIDE', '5.3', '3.6');
    expect(result).to.equal(1.25);
  });
  it('division by zero test for DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 5.3, 0);
    expect(result).to.equal('Error');
  });
});
