var expect  = require("chai").expect,
    helpers = require("../lib/helpers.js");

describe("helpers.js", function () {
    "use strict";

    describe("exports", function () {
        describe("getSize", function () {
            it("should be a function", function () {
                expect(helpers.getSize).to.be.a("function");
            });
        });

        describe("getString", function () {
            it("should be a function", function () {
                expect(helpers.getString).to.be.a("function");
            });
        });
    });

    describe("getSize()", function () {
        describe("\"foo\"", function () {
            it("should return 3", function () {
                expect(helpers.getSize("foo")).to.equal(3);  
            });
        });

        describe("42", function () {
            it("should return 42", function () {
                expect(helpers.getSize(42)).to.equal(42);
            });
        });

        describe("[1,3,3,7]", function () {
            it("should return 4", function () {
                expect(helpers.getSize([1,3,3,7])).to.equal(4);
            });
        });

        describe("{foo: 'bar'}", function () {
            it("should return 4", function () {
                expect(helpers.getSize({foo: 'bar'})).to.equal(1);
            });
        });

        describe("Date(42)", function () {
            it("should return 42", function () {
                expect(helpers.getSize(new Date(42))).to.equal(42);
            });
        });
    });

});