let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCss = require('gulp-clean-css');
let htmlmin = require('gulp-htmlmin');

gulp.task('sass', function() {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/css/'))
});

gulp.task('minifyCss', function() {
    return gulp.src('dev/css/styles.css')
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('minifyHtml', function() {
    return gulp.src('dev/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('moveImages', function() {
    return gulp.src('dev/images/*')
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('package', ['minifyHtml', 'minifyCss', 'moveImages']);

gulp.task('default', ['sass']);