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

});