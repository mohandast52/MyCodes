var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
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
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        // .on('error', errorLog)
        .pipe(gulp.dest('build/js'));
});

// Styles Task - Uglifies
gulp.task('styles', function () {
    return sass('scss/*.scss', {
            style: 'expanded'
        })
        .on('error', errorLog)
        .pipe(prefix('last 2 version'))
        .pipe(gulp.dest('css'))
        .pipe(livereload()); /* reloads whenever css is changed and saved  */
});

// BOOTSTRAP 4 - start

// to migrate bootstrap 4 js to /Boostrap 4 project/js folder
gulp.task('B4js', function () {
    gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('Bootstrap 4 project/js'));
});

// sass to css in /Boostrap 4 project/css/ folder
gulp.task('B4css', function () {
    return sass(['node_modules/bootstrap/scss/bootstrap.scss', 'Bootstrap 4 project/scss/*.scss'], {
            style: 'expanded'
        })
        .on('error', errorLog)
        .pipe(prefix('last 2 version'))
        .pipe(gulp.dest('Bootstrap 4 project/css'))
        .pipe(livereload());
});


// BOOTSTRAP 4 - end

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
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'Bootstrap 4 project/scss/*.scss'], ['B4css']);
});


gulp.task('default', ['scripts', 'styles', 'B4js', 'B4css', 'watch']);




// .pipe(plumber()) : runs even when error is occured