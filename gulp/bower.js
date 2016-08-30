'use strict';

const $ = require('gulp-load-plugins')();
const mainBowerFiles = require('main-bower-files');
const gulp = require('gulp');


module.exports =  function (options) {
    return function () {
        return gulp.src(mainBowerFiles(options.src))
            .pipe($.uglifyjs(options.fileName))
            .pipe(gulp.dest(options.dest));
    }
};