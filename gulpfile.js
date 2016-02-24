	
var Promise = require('es6-promise').Promise;
	gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	// minifycss = require('gulp-minify-css'),
	// csslint = require('gulp-csslint'),
	// browserSync = require('browser-sync').create();
	rename = require('gulp-rename');

// run this task by typing in "gulp jade" in CLI
gulp.task('jade',function() {
	return gulp.src('jade/*.jade')
		.pipe(jade())  //pipe to jade plugin
		.pipe(gulp.dest('')); // tell gulp the output folder
});


// check css syntax for errors and inefficient code
// gulp.task('css', function() {
// 	gulp.src('css/*.css')
// 	.pipe(csslint())
// 	.pipe(csslint.reporter());
// });


// auto-prefixer for cross browser tweaks
// ...variables
// var autoprefixerOptions = {
// 	browsers: ['last 2 versions', '>5%', 'Firefox ESR']
// };

// run this by typing "gulp styles" in CLI
gulp.task('styles', function(){ 
	return sass('sass', { style: 'expanded' })
		.pipe(gulp.dest('css'))
		.pipe(rename({suffix: '.min'}))
		// .pipe(minifycss())
		.pipe(prefix('last 2 version'))
		.pipe(gulp.dest('css'));
});


// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });



// run this by typing "gulp watch" or just "gulp" in CLI
gulp.task('watch', function() {
	gulp.watch('sass/*.sass', ['styles']) //folder to watch matched with gulp task to run (ie., "styles")
	gulp.watch('jade/*.jade', ['jade']) //as for styles above
});


gulp.task('default', ['watch'], function() {

});