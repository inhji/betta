var gulp        = require("gulp"),
    mocha       = require("gulp-mocha"),
    uglify      = require("gulp-uglify"),
    watch       = require("gulp-watch"),
    rename      = require("gulp-rename"),
    grep        = require("gulp-grep-stream");

gulp.task("dist", function () {
    gulp.src('src/*.js')
        .pipe(watch(function(files) {
            return files
                .pipe(uglify())
                .pipe(rename("beta.min.js"))
                .pipe(gulp.dest('./dist/'));
        }));
});

gulp.task("test", function () {
    gulp.src('test/*-test.js')
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ["dist", "test"]);