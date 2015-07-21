var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');

gulp.task('build', function () {
  browserify({
    entries: 'src/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist'));

  gulp.src('src/index.html')
   .pipe(gulp.dest('dist'));

  gulp.src('src/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('dist'));
});
