var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

gulp.task('build', gulp.series(cb => {
    config.setEnv('production');
    config.logEnv();
    cb();
}, gulp.series('clean', 'sprite:svg', 'sass', 'pug', 'js', 'copy')));

gulp.task('build:dev', gulp.series(cb => {
    config.setEnv('development');
    config.logEnv();
    cb();
}, gulp.series('clean', 'sprite:svg', 'sass', 'pug', 'js', 'copy')));
