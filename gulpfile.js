var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('build-styles', function() {
   gulp.src('styles.scss')
       .pipe(sass())
       .pipe(gulp.dest('./'));
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            host: '10.20.40.93',
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['build-styles', 'webserver'], function() {
   gulp.watch('styles.scss', ['build-styles', 'webserver']);
});

