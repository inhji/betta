var requireDir  = require('require-dir');
var chai 		= require("chai");
var expect  	= chai.expect;
var beta 		= require("../beta.js");
var classes     = requireDir('../lib/classes');

describe("ßeta", function () {
	it('should be a function', function () {
		expect(beta).to.be.a("function");
	});

	describe('invocation', function () {
		describe('generic methods', function () {
			describe('method is()', function () {
				it('should return string', function () {
					expect(beta("foo").is()).to.equal("string");
				});
			});

			describe('method is("string")', function () {
				it('should return true', function () {
					expect(beta("foo").is("string")).to.equal(true);
				});
			});

			describe('method isDef()', function () {
				it('should return true', function () {
					expect(beta("foo").isDef()).to.equal(true);
				});
			});

			describe('method isUndef()', function () {
				it('should return false', function () {
					expect(beta("foo").isUndef()).to.equal(false);
				});
			});
		});

		describe('string methods', function () {
			it('should return an instance of betaString', function () {
				expect(beta("foo")).to.be.an.instanceof(classes.string);
			});

			describe('method is()', function () {
				it('should return string', function () {
					expect(beta("foo").is()).to.equal("string");
				});
			});

			describe('method is("string")', function () {
				it('should return true', function () {
					expect(beta("foo").is("string")).to.equal(true);
				});
			});

			describe('method trim()', function () {
				it('should return foo bar', function () {
					expect(beta("  foo bar   ").trim()).to.equal("foo bar");
				});
			});

			describe('method isUpper()', function () {
				it('it should return true', function () {
					expect(beta("ALL CAPS").isUpper()).to.equal(true);
				});
			});

			describe('method isLower()', function () {
				it('should return true', function () {
					expect(beta("foo bar").isLower()).to.equal(true);
				});
			});

			describe('method isAlpha()', function () {
				it('should return true', function () {
					expect(beta("foo bar").isAlpha()).to.equal(true);
				});
			});

			describe('method isEmail()', function () {
				it('should return true', function () {
					expect(beta("foo@bar.baz").isEmail()).to.equal(true);
				});
			});

			describe('method isUrl()', function () {
				it('should return true', function () {
					expect(beta("http://www.foo.de/").isUrl()).to.equal(true);
				});
			});

			describe('method isIp()', function () {
				it('should return true', function () {
					expect(beta("127.0.0.1").isIp()).to.equal(true);
				});
			});

			describe('method isIpv4()', function () {
				it('should return true', function () {
					expect(beta("127.0.0.1").isIpv4()).to.equal(true);
				});
			});

			// TODO: Add Ipv6 Test Case

			describe('method isEmpty()', function () {
				it('should return true', function () {
					expect(beta("foo").isEmpty()).to.equal(false);
				});
			});
		});
	});
	
});