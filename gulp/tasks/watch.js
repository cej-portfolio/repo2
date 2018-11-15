var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html', function(){
        browserSync.reload();
        //gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
        //gulp.start('styles');
    });

    watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'],function(){
    browserSync.reload();
});

/*
gulp.task('styles', function(){
    console.log('Imagine Sass or PostCSS tasks running here.')
});
gulp.task('html', function(){
    console.log("This is html task. what's up?");
});
*/
