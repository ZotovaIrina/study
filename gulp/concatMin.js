'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');


module.exports =  function (options) {
    return function () {
        return gulp.src(options.src)
            .pipe($.plumber({
                errorHandler: $.notify.onError()
            }))
            .pipe($.ngAnnotate())
            .pipe($.uglifyjs(options.fileName))
            .pipe(gulp.dest(options.dest));
    }
};