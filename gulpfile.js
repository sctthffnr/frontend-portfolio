var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function() {
  gulp.src('img-src/*.jpg')
  .pipe(imageResize({
    width: 360,
    height: 240
  }))
  .pipe(gulp.dest('images'));
});
