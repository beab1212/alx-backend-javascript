const { describe } = require('mocha');
const sendPaymentRequestToAPI = require('./5-payment');
const sinon = require('sinon');
const { expect } = require('chai');


describe('sendPaymentRequestToAPI method test', () => {
  let spy = sinon.spy(console, 'log');
  beforeEach(() => {
    // noting to do for now(fix point)
  });

  afterEach(() => {
    spy.resetHistory();
  });
  it('test logging correct output', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });
  it('test logging correct output', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
