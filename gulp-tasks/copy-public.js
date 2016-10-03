function copyPublic(gulp, plugins) {
  return function copyFiles() {
    return gulp.src('public/**/*')
      .pipe(gulp.dest('build'));
  };
};
module.exports = copyPublic;
