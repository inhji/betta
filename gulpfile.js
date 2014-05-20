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
    gulp.src('./src/beta.js')
        .pipe(uglify())
        .pipe(rename("beta.min.js"))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ["dist"]);
