var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require ('gulp-sourcemaps');

gulp.task('sass', function(done) {
    gulp.src('scss/main.scss')
        .pipe(sass({
          style: 'expanded',
          errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
        done();
});

//Watch task
gulp.task('watch',function(done) {
    gulp.watch('scss/*.scss',gulp.series('sass'));
    done();
});
