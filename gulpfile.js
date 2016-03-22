require('es6-promise').polyfill();

var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var prefix      = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var webpack     = require('webpack-stream');



/**
 * Launch the Server
 */
gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
});

/**
 * Compile files from sass into css
 */
gulp.task('sass', function () {
    return sass('app/sass/*.sass', {style: 'compressed'})
        .on('error', sass.logError)
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}));
});

/**
 * Compress and concatenate JS
 */
gulp.task('js', function(){
    return gulp.src('app/js/main.js')
        .pipe(webpack({
            output: {
                filename: 'main.min.js'
            },
            plugins: [
                new webpack.webpack.optimize.DedupePlugin(),
                new webpack.webpack.optimize.OccurenceOrderPlugin(),
                new webpack.webpack.optimize.UglifyJsPlugin({ compress: true }),
            ],
        }))
        .pipe(gulp.dest('app/js/'))
        .pipe(browserSync.reload({stream:true}));
});

/**
 * Watch sass, js files for changes & recompile & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('app/sass/**', ['sass']);
    gulp.watch('app/js/**', ['js']);
});

/**
 * Default task, running just `gulp` will compile the sass, js,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
