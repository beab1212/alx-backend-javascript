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

describe('cart page', () => {
  it('test status code with string id', (done) => {
    request.get('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it('test status code with number id', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('test response content with number id', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart :12');
      done();
    });
  });
  it('test response content length', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.headers['content-length']).to.equal('28');
      done();
    });
  });
});
