'use strict';

const del = require('del');
const gulp = require('gulp');


module.exports =  function (options) {
    return function () {
        return del(options.src);
    }
};