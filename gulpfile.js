'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const del = require('del');
const debug = require('gulp-debug');


gulp.task('jshint', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('sass', function () {
    return gulp.src('./src/assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/www/css/'));
});

gulp.task('clean', function () {
    return del(['./public/www/**']);
});

gulp.task('concat', function () {
    return gulp.src('./src/app/**/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./public/www/'));
});

gulp.task('copy:template', function () {
    return gulp.src(['./src/index.html', './src/app/**/*.html'])
        .pipe(gulp.dest(function(file) {
            return file.basename === 'index.html' ? './public/www/' : './public/www/template'
        }));
});

gulp.task('watch', function() {
    gulp.watch(['./src/index.html', './src/app/**/*.html'], gulp.series('copy:template'));
    gulp.watch('./src/app/**/*.js', gulp.series('build'));
    gulp.watch('./src/assets/sass/**/*.scss', gulp.series('sass'));
});



gulp.task('build', gulp.series(
    'jshint',
    'concat'
));

gulp.task('public', gulp.series(
    'clean',
    gulp.parallel('sass', 'build', 'copy:template')
));

gulp.task('dev', gulp.series('public', 'watch'));


