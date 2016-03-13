var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename')

gulp.task('default', function() {
  var width = 540;
  var height = 360;
  gulp.src('img-src/*.jpg')
  .pipe(imageResize({
    width: width,
    height: height
  }))
  .pipe(rename({
    suffix: '_1x'
  }))
  .pipe(gulp.dest('images'));
  gulp.src('img-src/*.jpg')
  .pipe(imageResize({
    width: width * 2,
    height: height * 2
  }))
  .pipe(rename({
    suffix: '_2x'
  }))
  .pipe(gulp.dest('images'));
  gulp.src('img-src/*.jpg')
  .pipe(imageResize({
    width: width * 3,
    height: height * 3
  }))
  .pipe(rename({
    suffix: '_3x'
  }))
  .pipe(gulp.dest('images'));
});
