var gulp    = require("gulp"),
    mocha   = require("gulp-mocha"),
    rename  = require("gulp-rename"),
	jshint  = require("gulp-jshint"),
	uglify 	= require("gulp-uglify"),
	coffee = require("gulp-coffee"),
	coffeelint = require('gulp-coffeelint'),
	stylish = require("jshint-stylish");

gulp.task("test", function () {
	gulp.src("./test/*-test.js")
		.pipe(mocha({
			ui: "bdd",
			globals: ["chai"],
			reporter: "nyan"
		}));
});

gulp.task("minify", function () {
	gulp.src(["./beta.js"])
		.pipe(uglify())
		.pipe(rename("beta.min.js"))
		.pipe(gulp.dest("./"));
});

gulp.task("watch", function () {
	var code = gulp.watch([
		"./beta.js",
		"./lib/*.js",
		"./test/*-test.js"], 
		["test"]);
});

gulp.task("default", ["watch"]);
gulp.task("min", ["minify"]);


