var gulp = require('gulp');
var minify = require('gulp-minify');

// Run gulp commands.
gulp.task('default', ["minify", "watch"]);

/**
  Minify file.
*/
gulp.task('minify', function(){
  gulp.src('src/*.js')
    .pipe(minify({
      ext : {
        src : '',
        min : '.min.js'
      },
      exclude : [],
      ignoreFiles : []
    }))
    .pipe(gulp.dest('dist'));
});

/**
  Watch for file changes and then update when changes occur.
*/
gulp.task('watch', function(){
  // Watch for js file changes.
  gulp.watch('src/*.js', ['minify']);
});
