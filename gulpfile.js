// 'use strict';
var gulp         = require('gulp'),
    concat       = require('gulp-concat-util'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browsersync  = require('browser-sync').create(),
    watch        = require('gulp-watch')
    ;

//For Styles
gulp.task('dev-styles', function(){
    gulp.src('sass/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(browsersync.reload({stream:true}));
    console.log("styles finished");
});

//For Watch Task
gulp.task('watch', function(){

    browsersync.init({
        server:{
            baseDir: './'
        }
    });

    gulp.watch('sass/*.scss',['dev-styles']);
    gulp.watch('./*.html').on('change', browsersync.reload);
    console.log("Watch finihed");
});

//For Default Task
gulp.task('default', ['watch']);
