const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('watch', watchFunction);
gulp.task('sass', compileSass);

function compileSass() {
    return gulp
        .src('src/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('src'));
}

function watchFunction() {
    gulp.watch('src/scss/*.scss', compileSass);
}