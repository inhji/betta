var expect  = require("chai").expect;
var beta 	= require("../beta.js");

console.log(beta);

describe("ßeta", function () {
	describe("is()", function () {
		it("should be a function", function () {
			expect(beta).to.be.a("function");
		});
	});
});