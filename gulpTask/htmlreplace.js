'use strict';

const htmlreplace = require('gulp-html-replace');
const gulp = require('gulp');


module.exports =  function (options) {
    return function () {
        return gulp.src(options.src)
            .pipe(htmlreplace(options.replace))
            .pipe(gulp.dest(options.dest));
    }
};