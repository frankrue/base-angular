function copyFontAwesome(gulp, plugins) {
  return function copyFiles() {
    gulp.src('./node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest('./public/fonts/font-awesome'));
  };
}

module.exports = copyFontAwesome;
