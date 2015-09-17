var gulp = require('gulp');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', './app/*.jade', './app/public/styles/**/*.css', './app/public/scripts/**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('jade', function() {
});

gulp.task('default', function() {
  // place code for your default task here
  gulp.run('jade', 'serve');
});
