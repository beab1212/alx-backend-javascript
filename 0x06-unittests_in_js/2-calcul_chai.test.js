const { describe, it } = require('mocha');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('test for SUM', () => {
    it('integer number test for SUM', () => {
      expect(calculateNumber('SUM', 5, 3)).to.equal(8);
    });
    it('float number test for SUM', () => {
      expect(calculateNumber('SUM', 5.3, 3.6)).to.equal(9);
    });
    it('string number test for SUM', () => {
      expect(calculateNumber('SUM', '5.3', '3.6')).to.equal(9);
    });
  });

  describe('test for SUBTRACT', () => {
    it('integer number test for SUBTRACT', () => {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });
    it('float number test for SUBTRACT', () => {
      expect(calculateNumber('SUBTRACT', 5.3, 3.6)).to.equal(1);
    });
    it('string number test for SUBTRACT', () => {
      expect(calculateNumber('SUBTRACT', '5.3', '3.6')).to.equal(1);
    });
  });

  describe('test for DIVIDE', () => {
    it('integer number test for DIVIDE', () => {
      expect(calculateNumber('DIVIDE', 5, 3)).to.equal(1.6666666666666667);
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
});
