var gulp = require('gulp'), // required node package
    uglify = require('gulp-uglify'), // requiring gulp uglify
    sass = require('gulp-ruby-sass');


 // Scripts Task
 // Uglifies
 gulp.task('scripts', function() {
     gulp.src('js/**/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('minjs'));
 });



gulp.task('styles', function() {
    return sass('scss', {
      style: 'compact'
    })
    .pipe(gulp.dest('css'));
});


// Watch Task
// watches js
gulp.task('watch', function(){
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('scss/**/*.scss', ['styles']);
});



gulp.task('default', ['scripts', 'styles', 'watch']);

