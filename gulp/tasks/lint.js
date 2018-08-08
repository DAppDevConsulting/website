var gulp        = require('gulp');
var sassLint    = require('gulp-sass-lint');
var prettier    = require('gulp-prettier');
var git         = require('gulp-git');


gulp.task('lint:js', function() {
  // return gulp.src(['src/js/**/*.js', '!node_modules/**'])
  //   .pipe(eslint())
  //   .pipe(eslint.format())
  //   .pipe(eslint.failAfterError());
});

gulp.task('prettier', function() {
  return gulp.src(['src/js/**/*.js'])
    .pipe(prettier())
    .pipe(gulp.dest('src/js/'))
    .pipe(git.add({args: '-u'}))
});

gulp.task('lint:sass', function() {
  return gulp.src('src/sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('lint', [
    'prettier',
    'lint:sass'
]);