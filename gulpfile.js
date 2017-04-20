var gulp   = require('gulp');

var server = require('gulp-server-livereload');

var postcss = require('gulp-postcss');
var prefixer = require('gulp-autoprefixer');
var pxtorem = require('postcss-pxtorem');

var cssmin = require('gulp-clean-css');
var sass = require('gulp-sass');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

//
// js build
//

gulp.task('js:build', function() {
  return browserify({entries: './src/app.js'})
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/'))
});

//
// css build
//
 
gulp.task('css:build', function () {
  var processors = [
    pxtorem({
      propWhiteList: [],
      mediaQuery: true,
      replace: true
    })
  ];

  gulp.src('./src/template/app.scss')
    .pipe(sass())
    .pipe(prefixer())
    .pipe(postcss(processors))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/'))
});

//
// build
//

gulp.task('build', [
  'css:build',
  'js:build'
]);

//
// server
//

gulp.task('webserver', function() {
 gulp.src('')
   .pipe(server({
     livereload: true
   }));
});

//
// watch
//

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', ['css:build']);
  gulp.watch('./src/**/*.js', ['js:build']);
});

//
// default
//
 
gulp.task('default', ['build', 'webserver', 'watch']);