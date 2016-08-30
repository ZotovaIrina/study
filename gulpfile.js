'use strict';

const gulp = require('gulp');

function requireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback) {
        var task = require(path).call(this, options);
        return task(callback);
        })
}

requireTask('sass', './gulp/sass', {
    src: './src/assets/sass/**/*.scss',
    dest: './public/www/css/'
});

requireTask('jshint', './gulp/jshint', {
    src: './src/app/**/*.js'
});

requireTask('sass:min', './gulp/sassMin', {
    src: './src/assets/sass/**/*.scss',
    dest: './public/www/css/'
});

requireTask('clean', './gulp/clean', {
    src: './public/www/**'
});

requireTask('concat', './gulp/concat', {
    src: './src/app/**/*.js',
    fileName: 'build.js',
    dest: './public/www/'
});

requireTask('concat:min', './gulp/concatMin', {
    src: './src/app/**/*.js',
    fileName: 'build.min.js',
    dest: './public/www/'
});

requireTask('copy:template', './gulp/copy', {
    src: ['./src/index.html', './src/app/**/*.html'],
    dest: function (file) {
        return file.basename === 'index.html' ? './public/www/' : './public/www/template'
    }
});
requireTask('copy:static', './gulp/copy', {
    src: './src/assets/**/*.{json,jpg}',
    dest: './public/www/assets'
});

requireTask('bower', './gulp/bower', {
    src: '**/*.js',
    fileName: 'vendor.min.js',
    dest: "./public/www/"
});

requireTask('htmlreplace', './gulp/htmlreplace', {
    src: './src/index.html',
    replace: {
        'css': 'css/index.min.css',
        'js': 'build.min.js'
    },
    dest: './public/www/'
});

requireTask('serve', './gulp/serve', {
    server: './public/www/',
    watch: './public/www/**/*.*'
});

requireTask('jsonServer', './gulp/jsonServer', {
    server: './server/users.json',
    port: 2500
});

gulp.task('watch', function () {
    gulp.watch(['./src/index.html', './src/app/**/*.html'], gulp.series('copy:template'));
    gulp.watch('./src/app/**/*.js', gulp.series('build'));
    gulp.watch('./src/assets/sass/**/*.scss', gulp.series('sass'));
});


gulp.task('build', gulp.series(
    'jshint',
    'concat'
));

gulp.task('build:min', gulp.series(
    'jshint',
    'concat:min'
));

gulp.task('public', gulp.series(
    'clean',
    gulp.parallel('sass', 'build', 'copy:template', 'bower')
));

gulp.task('public:min', gulp.series(
    'clean',
    gulp.parallel('sass:min', 'build:min', 'copy:template', 'bower'),
    'htmlreplace'
));

gulp.task('dev', gulp.series('public',
    gulp.parallel(
        'watch',
        'serve',
    'jsonServer')
));


