var gulp        = require("gulp"),
    mocha       = require("gulp-mocha"),
    uglify      = require("gulp-uglify"),
    watch       = require("gulp-watch"),
    grep        = require("gulp-grep-stream"),

gulp.task("watch", function() {
    gulp.src(["./test/*.js", "./src/*.js"], { read: false })
        .pipe(watch({ emit: "all" }, function(files) {
            files
                .pipe(grep("*-test.js"))
                .pipe(mocha({
                    ui: "bdd",
                    globals: ["chai"],
                    reporter: "nyan"
                }))
                .on("error", function() {
                    if (!/tests? failed/.test(err.stack)) {
                        console.log(err.stack);
                    }
                });
        }))
});


gulp.task("default", ["watch"]);