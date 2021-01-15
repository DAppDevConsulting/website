var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

gulp.task('default', gulp.series('build:dev', gulp.parallel('server', 'watch')));
