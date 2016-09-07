'use strict';

const gulp = require('gulp');
const Server = require('karma').Server;
const path = require('path');


module.exports =  function (options) {
    return function(done) {
        new Server({
            configFile: path.join(__dirname, '../test/karma.conf.js'),
            singleRun: false
        }, done).start();
    }
};