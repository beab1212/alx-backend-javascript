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
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('test response content length', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.headers['content-length']).to.equal('27');
      done();
    });
  });
});

describe('available_payments', () => {
  it('test status code', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('test response content', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      console.log('Debugging: ', typeof body);
      expect(JSON.parse(body)).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});

describe('login test', () => {
  it('test status code', (done) => {
    const option = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		    userName: 'ALX'
	    }
	  };
    request.post(option, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('test response content', (done) => {
    const option = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		    userName: 'ALX'
	    }
	  };
    request.post(option, (err, res, body) => {
      expect(body).to.deep.equal('Welcome ALX');
      done();
    });
  });
});
