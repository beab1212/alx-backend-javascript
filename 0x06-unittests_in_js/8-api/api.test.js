const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('request');

describe('Index page', () => {
  it('test status code', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('test response content', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('test response content length', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});
