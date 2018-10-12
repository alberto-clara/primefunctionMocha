/* eslint-env mocha, chai */
/* global chai, foo */

describe('Test For Correctness', function () {
  describe('primeGen', function () {
    it('primeGen(10) => [2, 3, 5, 7]', function () {
      chai.expect(primeGen(10)).to.have.members([2, 3, 5, 7]);
    });
    it('primeGen(20) => [2, 3, 5, 7, 11, 13, 17, 19]', function () {
      chai.expect(primeGen(20)).to.have.members([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  describe('cumulativeSum', function () {
    it('cumulativeSum([1, 2, 3, 4]) => [1, 3, 6, 10]', function () {
      chai.expect(cumulativeSum([1, 2, 3, 4])).to.have.members([1, 3, 6, 10]);
    });
    it('cumulativeSum([10, 11, 12, 13, 14]) => [10, 21, 33, 46, 60]', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.have.members([10, 21, 33, 46, 60]);
    });
  });

});