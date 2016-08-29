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
            .pipe($.concat(options.fileName))
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(options.dest));
    }
};