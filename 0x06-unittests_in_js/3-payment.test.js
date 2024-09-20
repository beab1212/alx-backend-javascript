const { expect } = require('chai');
const sinon = require('sinon');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  const spy = sinon.spy(Utils, 'calculateNumber');
  it('sinon first test', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.firstCall.args[0]).to.equal('SUM');
    expect(spy.firstCall.args[1]).to.equal(100);
    expect(spy.firstCall.args[2]).to.equal(20);
    spy.restore();
  });
});
