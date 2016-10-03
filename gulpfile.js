var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// development tasks
gulp.task('clean-tmp', require('./gulp-tasks/clean-tmp')(gulp,plugins));
gulp.task('copy-font-awesome-init', ['clean-tmp'], require('./gulp-tasks/copy-font-awesome')(gulp, plugins));
gulp.task('browserify-init', ['clean-tmp'], require('./gulp-tasks/browserify-dev')(gulp, plugins));
gulp.task('sass-init', ['clean-tmp'], require('./gulp-tasks/sass-dev')(gulp, plugins));
gulp.task('pug-init', ['clean-tmp'], require('./gulp-tasks/pug-dev')(gulp, plugins));
gulp.task('sass-dev', require('./gulp-tasks/sass-dev')(gulp, plugins));
gulp.task('pug-dev', require('./gulp-tasks/pug-dev')(gulp, plugins));
gulp.task('browser-sync', ['copy-font-awesome-init','pug-init','sass-init','browserify-init'],
  require('./gulp-tasks/browser-sync')(gulp, plugins));

// distribution build tasks
gulp.task('clean-build', require('./gulp-tasks/clean-build')(gulp, plugins));
gulp.task('copy-font-awesome-dist',['clean-build'], require('./gulp-tasks/copy-font-awesome')(gulp, plugins));
gulp.task('browserify-dist', ['clean-build'], require('./gulp-tasks/browserify-dist')(gulp, plugins));
gulp.task('sass-dist', ['clean-build'], require('./gulp-tasks/sass-dist')(gulp, plugins));
gulp.task('pug-dist', ['clean-build'], require('./gulp-tasks/pug-dist')(gulp, plugins));
gulp.task('copy-public', ['copy-font-awesome-dist'], require('./gulp-tasks/copy-public')(gulp, plugins));

// serve and watch
gulp.task('serve',['browser-sync'], function() {
  gulp.watch('./source/pug/**/*.pug', ['pug-dev']);
  gulp.watch('./source/sass/**/*.{sass,scss}', ['sass-dev']);
});

// macros
gulp.task('default',['serve']);
gulp.task('build',['copy-public','browserify-dist','pug-dist','sass-dist']);
