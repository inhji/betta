var chai 		= require("chai");
var beta 		= require("../src/beta.js");
var expect      = chai.expect;

describe("ßeta", function () {
	it('should be a function', function () {
		expect(beta).to.be.a("function");
	});

	describe('BaseClass', function () {

		describe('"foo" is()', function () {
			it('should return "string"', function () {
				expect(beta("foo").is()).to.equal("string");
			});
		});

		describe('"foo" is("string")', function () {
			it('should return true', function () {
				expect(beta("foo").is("string")).to.equal(true);
			});
		});

		describe('"foo" isDef()', function () {
			it('should return true', function () {
				expect(beta("foo").isDef()).to.equal(true);
			});
		});

		describe('"foo" isUndef()', function () {
			it('should return true', function () {
				expect(beta("foo").isUndef()).to.equal(false);
			});
		});

		describe('null isDef()', function () {
			it('should return false', function () {
				expect(beta(null).isDef()).to.equal(false);
			});
		});

		describe('undefined isUndef()', function () {
			it('should return true', function () {
				expect(beta(undefined).isUndef()).to.equal(true);
			});
		});

	});

	describe('Number', function () {
		describe('42 isEven()', function () {
			it('should return true', function () {
				expect(beta(42).isEven()).to.equal(true);
			});
		});

		describe('99 isOdd()', function () {
			it('should return true', function () {
				expect(beta(99).isOdd()).to.equal(true);
			});
		});

		describe('1.337 round()', function () {
			it('should return [ 1.34 ]', function () {
				expect(beta(1.337).round()[0]).to.equal(1.34);
			});
		});
	});

});