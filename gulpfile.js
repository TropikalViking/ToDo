var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-styles', function() {
   gulp.src('styles.scss')
       .pipe(sass())
       .pipe(gulp.dest('./'));
});

gulp.task('default', ['build-styles'], function() {
   gulp.watch('styles.scss', ['build-styles']);
});