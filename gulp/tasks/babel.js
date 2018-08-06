const gulp = require('gulp');
const babel = require('gulp-babel');
const config = require('../config');

gulp.task('js', () =>
  gulp.src(config.src.js + '/*.js')
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(gulp.dest(config.dest.js))
);

gulp.task('js:watch', function () {
  gulp.watch(config.src.js + '/**/*.js', ['js']);
});
