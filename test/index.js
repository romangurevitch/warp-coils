var should = require('chai').should(),
    mygen = require('../index'),
    gen = mygen.Gen();

describe('#Gen', function() {
  it('is a number', function() {
    gen.should.be.a('number');
  });

 it('below 2000', function() {
    gen.should.be.below(2001);
  });

  it('above 1000', function() {
    gen.should.be.above(999);
  });

});

