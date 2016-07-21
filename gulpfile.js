var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemap = require('gulp-sourcemaps');

gulp.task('js', function(){
  gulp.src('src/js/**/*.js')
      .pipe(sourcemap.init())
      .pipe(gulp.dest('dist/js'))
      .pipe(rename('simplealert.min.js'))
      .pipe(uglify())
      .pipe(sourcemap.write('/'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function(){
  gulp.src('src/css/**/*.css')
      .pipe(gulp.dest('dist/css'))
      .pipe(minifycss())
      .pipe(rename('simplealert.min.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['js', 'css'])
