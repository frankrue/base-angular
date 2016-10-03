function sass(gulp, plugins) {

  return function compileSass() {

    return gulp.src('./source/sass/app.sass')
      .pipe(plugins.sass({
        outputStyle: 'compressed',
        precision: 10,
        includePaths: ['.']
      }))
      .on('error', swallowError)
      .pipe(plugins.postcss([
        require('autoprefixer')({browsers: ['last 2 versions']})
      ]))
      .pipe(gulp.dest('./build/css'));
  };

};

function swallowError(error) {
  console.error('[ SASS error ]', error.toString());
  this.emit('end');
}

module.exports = sass;
