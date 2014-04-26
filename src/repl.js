#!/usr/bin/env node

var repl = require("repl");
var ß = require("./src/beta.js");

var reload = function () {
	ß = require("./beta.js");
	console.log("required!");
}

//A "local" node repl with a custom prompt
var local = repl.start("node::ß> ");

local.context.reload = reload;
local.context.ß = ß;