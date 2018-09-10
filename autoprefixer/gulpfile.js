var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', () => {
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


gulp.task('watch',function() {
  gulp.watch('css/styles.css', ['styles']);
});
