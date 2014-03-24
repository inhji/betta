var gulp    	= require("gulp"),
    mocha   	= require("gulp-mocha"),
    rename  	= require("gulp-rename"),
	jshint  	= require("gulp-jshint"),
	uglify 		= require("gulp-uglify"),
	stylish 	= require("jshint-stylish"),
	browserify 	= require("browserify"),
	source 		= require('vinyl-source-stream'),
	streamify 	= require('gulp-streamify');

gulp.task("test", function () {
	gulp.src("./test/*-test.js")
		.pipe(mocha({
			ui: "bdd",
			globals: ["chai"],
			reporter: "nyan"
		}));
});


gulp.task('dist', function() {
  var bundleStream = browserify('./beta.js').bundle();

  bundleStream
    .pipe(source('./beta.js'))
    .pipe(streamify(uglify()))
    .pipe(rename("beta.min.js"))
    .pipe(gulp.dest('./dist'));
});

gulp.task("watch", function () {
	var code = gulp.watch([
		"./beta.js",
		"./lib/*.js",
		"./test/*-test.js"
	], ["init"]);
	console.log("\nAlways watching..\n");
});

gulp.task("default", ["init", "watch"]);
gulp.task("init", ["test", "dist"]);