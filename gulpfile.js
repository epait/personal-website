var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');


// SASS Task
gulp.task('sass', function () {
    gulp.src(['./scss/**/*.scss'])
        .pipe(plugins.rubySass({sourcemapPath: '../scss', compass: true}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('./css'))
        .pipe(plugins.filter('**/*.css'))
        .pipe(plugins.minifyCss())
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Default gulp task with Browser Sync
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch('**/*.scss', ['sass']);
});