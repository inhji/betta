var gulp        = require("gulp"),
    mocha       = require("gulp-mocha"),
    rename      = require("gulp-rename"),
    uglify      = require("gulp-uglify"),
    coffee      = require('gulp-coffee'),
    coffeelint  = require('gulp-coffeelint');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(rename("beta.min.js"))
    .pipe(gulp.dest('dist'));
});

gulp.task('coffeelint', function () {
    gulp.src("./src/*.coffee")
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});

gulp.task("test", function () {
    gulp.src("./test/*-test.js")
        .pipe(mocha({
            ui: "bdd",
            globals: ["chai"],
            reporter: "nyan"
        }));
});

gulp.task("watch", function () {
    var watcher = gulp.watch(["./src/*.coffee"], ["coffee", "coffeelint", "test"]);
});


gulp.task("default", ["init", "watch"]);
gulp.task("init", ["test"]);