var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts',['modernizr'], function(callback){
    webpack(require('../../webpack.config.js'), function(err, stats){
        console.log("Hooray! Webpack completed!!")
        if(err){
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
});
