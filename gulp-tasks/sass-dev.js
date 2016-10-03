var stream = require('browser-sync').stream;

function sass(gulp, plugins) {

  return function compileSass() {

    return gulp.src('./source/sass/app.sass')
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'nested',
        precision: 10,
        includePaths: ['.']
      }))
      .on('error', swallowError)
      .pipe(plugins.postcss([
        require('autoprefixer')({browsers: ['last 2 versions']})
      ]))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest('./.tmp/css'))
      .pipe(stream());
  };

};

function swallowError(error) {
  console.error('[ SASS error ]', error.toString());
  this.emit('end');
}

module.exports = sass;
