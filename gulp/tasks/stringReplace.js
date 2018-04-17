const gulp = require('gulp');
const replace = require('gulp-replace');
const { versionNumber } = require('../config');

gulp.task('stringReplacePackageJson', function () {
  return gulp.src('./package.json')
    .pipe(replace(/"version": .*/, '"version": "' + versionNumber + '",'))
    .pipe(gulp.dest('.'));
})

gulp.task('stringReplacePackageLock', function () {
  return gulp.src('./package-lock.json')
    .pipe(replace(/("name": "length.js",\s  "version": )".*",/, '$1"' + versionNumber + '",'))
    .pipe(gulp.dest('.'));
})

gulp.task('stringReplaceLengthJs', function () {
  return gulp.src('./length.js')
    .pipe(replace(/length.js v.* /, 'length.js v' + versionNumber + ' '))
    .pipe(replace(/version = ".*"/, 'version = "' + versionNumber + '"'))
    .pipe(gulp.dest('.'));
})

gulp.task('stringReplaceHeaderJs', function () {
  return gulp.src('./templates/header.js')
    .pipe(replace(/length.js v.* /, 'length.js v' + versionNumber + ' '))
    .pipe(gulp.dest('./templates'));
})
