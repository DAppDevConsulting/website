var gulp = require('gulp');
var plumber = require('gulp-plumber');
var svgmin = require('gulp-svgmin');
var svgStore = require('gulp-svgstore');
var rename = require('gulp-rename');
var config = require('../config');

gulp.task('sprite:svg', function () {
  return gulp
    .src(config.src.iconsSvg + '/*.svg')
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(svgmin({
      js2svg: {
        pretty: true
      },
      plugins: [{
        removeDesc: true
      }, {
        cleanupIDs: false
      }, {
        mergePaths: false
      }]
    }))
    .pipe(rename({prefix: 'icon-'}))
    .pipe(svgStore({inlineSvg: false}))
    .pipe(rename({basename: 'sprite'}))
    .pipe(gulp.dest(config.dest.img));
});

gulp.task('sprite:svg:watch', function () {
  gulp.watch(config.src.iconsSvg + '/*.svg', ['sprite:svg']);
});
