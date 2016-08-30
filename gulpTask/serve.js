'use strict';

const browserSync = require('browser-sync');
const gulp = require('gulp');


module.exports =  function (options) {
    return function () {
        browserSync.init({
            server: options.server,
            rewriteRules: [
                {
                    match: /Content-Security-Policy/,
                    fn: function (match) {
                        return "DISABLED-Content-Security-Policy";
                    }
                }
            ]
        });
        browserSync.watch(options.watch).on('change', browserSync.reload);
    }
};