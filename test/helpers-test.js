var expect  = require("chai").expect,
    helpers = require("../lib/helpers.js");

describe("helpers.js", function () {
    "use strict";

    describe("exports", function () {
        it("should be a function", function () {
            expect(helpers.getSize).to.be.a("function");
            expect(helpers.getType).to.be.a("function");
            expect(helpers.getType).to.be.a("function");
            expect(helpers.getType).to.be.a("function");
        });
    });

});