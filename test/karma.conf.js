// Karma configuration

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files to exclude
        exclude: [
            'test/protractor.conf.js', 'test/e2e/*.js'
        ],
        // preprocess matching files before serving them to the browser
        preprocessors: {
            'public/www/template/**/*.html': ['ng-html2js'],
            './public/www/build.js': ['coverage']
        },

        files: [
            './public/www/vendor.min.js',
            './public/www/build.js',
            'public/www/template/**/*.html',
            './bower_components/angular-mocks/angular-mocks.js',
            './test/unit/**/*.js'
        ],

        ngHtml2JsPreprocessor: {
            stripPrefix: 'public/',
            moduleName: 'templates'
        },

        // test results reporter to use
        reporters: [
            'dots',
            'coverage',
            'html'],

        coverageReporter: {
            dir: './test/report/coverage/',
            type: 'html'
        },
        htmlReporter: {
            outputFile: './test/report/unit/units.html',
            // Optional
            pageTitle: 'Study Application',
            subPageTitle: 'Unit Tests Report',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true
        },
        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        pattern: './public/www/build.js',
        included: false,
        watch: true,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity

    })
};