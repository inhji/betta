var gulp        = require("gulp"),
    mocha       = require("gulp-mocha"),
    uglify      = require("gulp-uglify"),
    watch       = require("gulp-watch"),
    rename      = require("gulp-rename"),
    grep        = require("gulp-grep-stream");

function handleError(err) {
    console.log(err.message);
    this.emit('end');
}

gulp.task("dist", function () {
    gulp.src('./src/*.js')
        .pipe(watch(function(files) {
            return files
                .pipe(uglify())
                .pipe(rename("beta.min.js"))
                .pipe(gulp.dest('./dist/'));
        }));

    gulp.src('./test/*-test.js')
        .pipe(watch(function(files) {
            return files
                .pipe(mocha({reporter: 'spec'}))
                .on("error", handleError);
        }));
});

gulp.task("test", function () {
    /*
    gulp.src('test/*-test.js')
        .pipe(watch(function(files) {
            return files
                .pipe(mocha({reporter: 'nyan'}))
                .on("error", handleError);
        }));
    */
});

gulp.task('default', ["dist", "test"]);