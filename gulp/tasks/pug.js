var gulp        = require('gulp');
var pug         = require('gulp-pug');
var data        = require('gulp-data');
var plumber     = require('gulp-plumber');
var changed     = require('gulp-changed');
var gulpif      = require('gulp-if');
var prettify    = require('gulp-prettify');
var config      = require('../config');
var fs          = require('fs');

function renderHtml(onlyChanged) {
    return gulp
        .src([config.src.templates + '/[^_]*.pug'])
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(gulpif(onlyChanged, changed(config.dest.html, { extension: '.html' })))
        .pipe(data(function() {return JSON.parse(fs.readFileSync(config.src.data + '/data.json'))}))
        .pipe(pug())
        .pipe(prettify({
            indent_size: 2,
            wrap_attributes: 'auto', // 'force'
            preserve_newlines: true,
            // unformatted: [],
            end_with_newline: true
        }))
        .pipe(gulp.dest(config.dest.html));
}

gulp.task('pug', () => renderHtml());

gulp.task('pug:changed', () => renderHtml(true));

gulp.task('pug:watch', (done) => {
    gulp.watch([config.src.templates + '/**/_*.pug', config.src.data + '/**/*.json'], () => renderHtml());
    gulp.watch([config.src.templates + '/**/[^_]*.pug'], () => renderHtml(true));
});
