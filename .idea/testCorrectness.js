/* eslint-env mocha, chai */
/* global chai, foo */

describe('foo', function () {
  it('must be string', function () {
    chai.expect(foo).to.be.a('string');
  });
  it('must have length 3', function () {
    chai.expect(foo).to.have.length(3);
  });
});
