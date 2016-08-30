'use strict';

const gulp = require('gulp');
const jsonServer = require('gulp-json-srv');


module.exports =  function (options) {
    return function () {
        jsonServer.start({
            data: options.server,
            port: options.port
        });
    }
};
