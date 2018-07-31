var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    // imagemin = require('gulp-imagemin'),    
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer');


// common function to spit error
function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}

// Scripts Task - Uglifies
/*
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        // .on('error', errorLog)
        .pipe(gulp.dest('build/js'));
});
*/

// Styles Task - Uglifies
gulp.task('styles', function () {
    return gulp.src('scss/*.scss')
        // .pipe(plumber())
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('css/'))
        .pipe(livereload()); /* reloads whenever css is changed and saved  */
});

/*
// NOT WORKING
// Image task : compression
gulp.task('image-compression', function () {
    return gulp.src('images/*') 
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 3
        }))
        .pipe(gulp.dest('build'));
});
*/


// Watch Task - Watches JS
gulp.task('watch', function () {

    livereload.listen(); /* as the name suggest, used for live reloading */

    // looks for changes in js/*.js (means any js files in js Folder) and runs the scripts in the array
    // gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('default', [/*'scripts',*/ 'styles', 'watch']);




// .pipe(plumber()) : runs even when error is occured