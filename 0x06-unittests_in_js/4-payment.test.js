const { expect } = require('chai');
const sinon = require('sinon');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  // const spy = sinon.spy(Utils, 'calculateNumber');
  const logSpy = sinon.spy(console, 'log');
  const utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  it('sinon first test', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.firstCall.args[0]).to.equal('The total is: 10');
    utilsStub.restore();
    logSpy.restore();
  });
});
