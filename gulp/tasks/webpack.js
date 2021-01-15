const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gutil');
const webpackConfig = require('../../webpack.conf');
const config = require('../config');

gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    cb();
  });
});

gulp.task('js:watch', function () {
  gulp.watch(config.src.js + '/**/*.js', gulp.series('js'));
});