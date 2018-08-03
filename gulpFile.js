var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer')
    , browserify = require('gulp-browserify')
    ;

function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}

/*
// Scripts Task - Uglifies
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(gulp.dest('build/js'));
});
*/

// Styles Task - Uglifies
gulp.task('styles', function () {
    return gulp.src('scss/*.scss')
        // .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('css/'))
        .pipe(livereload()); /* reloads whenever css is changed and saved  */
});


// browserify
gulp.task('browserifyTask', function () {
    console.log('browserifyTask');
    gulp.src('bundle.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('build/js/'))
});

// Watch Task - Watches JS
gulp.task('watch', function () {

    livereload.listen(); /* as the name suggest, used for live reloading */

    // looks for changes in js/*.js (means any js files in js Folder) and runs the scripts in the array
    // gulp.watch('js/*.js', ['scripts']);
    gulp.watch('bundle.js', ['browserifyTask']);
    gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('default', [/*'scripts',*/ 'styles', 'browserifyTask', 'watch']);







// .pipe(plumber()) : runs even when error is occured


/*
--save: adds to package.json's dependencey and when we do npm install, all the things 
in the package.json's dependency will be downloaded.

--save-dev: they are put into devDependencies. Its just for development
and it won't be downloaded on npm install

*/