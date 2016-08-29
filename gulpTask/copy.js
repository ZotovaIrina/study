'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();


module.exports =  function (options) {
    return function () {
        return gulp.src(options.src)
            .pipe($.debug())
            .pipe(gulp.dest(options.dest));
    }
};