var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch',
    ['copy:watch',
    'pug:watch',
    'sprite:svg:watch',
    'js:watch',
    'sass:watch'
]);
