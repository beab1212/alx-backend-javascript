const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI test async', () => {
  it('test if returned a promise resolved', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).has.property('data');
      done();
    })
  })
});
