'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');


module.exports =  function (options) {
    return function () {
        return gulp.src(options.src)
            .pipe($.plumber({
                errorHandler: $.notify.onError()
            }))
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.sourcemaps.write())
            .pipe($.cssmin())
            .pipe($.rename({suffix: '.min'}))
            .pipe(gulp.dest(options.dest));
    }
};
