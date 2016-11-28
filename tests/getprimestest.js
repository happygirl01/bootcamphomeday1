(function(){
	var chai = require('chai');
	var expect = chai.expect;
	var getPrimes = require('../app/getPrimes.js')

	describe("getPrimes ", function() {
  	describe("Case for prime number from 0 to number", function() {


	    it("should return '[]' for -4", function() {
	      expect(getPrimes(-4)).to.be.eql([]);
	    });


	    it("should return '[]' for 0", function() {
	      expect(getPrimes(0)).to.be.eql([]);
	    });

	    it("should return '[2]' for 2", function() {
	      expect(getPrimes(2)).to.eql([2]);
	    });

	    it("should return '[2,3]' for 3", function() {
	      expect(getPrimes(3)).to.eql([2,3]);
	    });
	});
});
})()


