var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');

gulp.task('jsx', function() {
  return browserify({
      entries: 'src/app.jsx',
      extensions: ['.jsx'],
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
  return gulp.src('src/html/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
  return gulp.src('src/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['jsx','html','less']);
