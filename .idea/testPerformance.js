/* eslint-env mocha, chai */
/* global chai, primeGen, cumulativeSum, maxPrimeSum */

describe('Test for Performance', function () {
  it('primeGen(100000) => [2, 3, 5, 7, 11, 13]', function () {
    chai.expect(primeGen(100000)).to.have.members(Array(9592));
  });
  it('maxPrimeSum(10000) should take <= 20ms', function () {
    this.timeout(20);
    chai.expect(maxPrimeSum(10000)).to.have.all.members([9521, 65]);
    this.slow(0);
  });
  it('maxPrimeSum(100000) should take <= 200ms', function () {
    this.timeout(200);
    chai.expect(maxPrimeSum(100000)).to.have.all.members([92951, 183]);
    this.slow(0);
  });
});