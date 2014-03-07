var gulp    = require("gulp"),
    mocha   = require("gulp-mocha"),
    rename  = require("gulp-rename"),
	jshint  = require("gulp-jshint"),
	uglify 	= require("gulp-uglify"),
	stylish = require("jshint-stylish");

gulp.task("test", function () {
	gulp.src("./test/*-test.js")
		.pipe(mocha({
			ui: "bdd",
			globals: ["chai"],
			reporter: "nyan"
		}));
});

gulp.task("hint", function() {
    gulp.src(["./beta.js"])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task("minify", function () {
	gulp.src(["./beta.js"])
		.pipe(uglify())
		.pipe(rename("beta.min.js"))
		.pipe(gulp.dest('./'));
});

gulp.task("watch", function () {
	var code = gulp.watch(["./beta.js", "./lib/*.js"], ["default"]);
});

gulp.task("default", ["hint", "test", "minify"]);