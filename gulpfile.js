var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
	      stream: true
	    }));
});
gulp.task('watch', ['sass'], function(){
  	gulp.watch('app/scss/**/*.scss', ['sass']); 
  	browserSync({
    	notify: false,
    	server: {
	        baseDir: 'app'
	    }
	});
	gulp.watch(['app/*.html'], reload);
})


// gulp.task('serve', [], function () {
//     browserSync({
//         notify: false,
//         server: {
//             baseDir: 'app'
//         }
//     });
//     gulp.watch(['app/*.html'], reload);
// });