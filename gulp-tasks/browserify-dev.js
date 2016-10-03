var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash').assign;

function bundler(gulp, plugins) {

  var options = {
    entries: ['./source/coffee/app.coffee'],
    transform: ['coffeeify'],
    extensions: ['.coffee'],
    debug: false
  };
  var opts = assign({}, watchify.args, options);
  var b = watchify(browserify(opts));

  b.on('update', bundle);
  b.on('log', plugins.util.log);

  function bundle() {
    return b.bundle()
      .on('error', plugins.util.log.bind(plugins.util, 'Browserify Error'))
      .pipe(source('app.bundle.js'))
      .pipe(buffer())
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest('./.tmp/js'));
  }

  return bundle;

};

module.exports = bundler;
