module.exports = function(gulp, plugins) {
  return function() {
    return gulp
      .src(['./source/pug/**/*.pug'], { base: './source/pug' })
      .pipe(plugins.pug({ pretty: true }))
      .pipe(gulp.dest('.tmp'));
  };
};
