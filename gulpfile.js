const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

gulp.task('watch', watch);
gulp.task('sass', scss);

function scss() {
    return gulp
        .src('src/scss/*.scss')
        .pipe(concat('App.css'))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('src'));
}

function watch() {
    gulp.watch('src/scss/*.scss', scss);
}