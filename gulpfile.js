var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uncss = require('gulp-uncss');
var rename = require("gulp-rename");

gulp.task('sass', function(){
    return gulp.src('app/sass/*.scss')
        .pipe(sass({
            errLogToConsole: false,
            onError: function(err){
                return write(err);
            }
        }))
        .pipe(prefixer('last 15 versions'))
        //.pipe(cleanCSS({compatibility: 'ie8'}))
        //.pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/css/'))

});
gulp.task('uncss', function () {
    return gulp.src('dist/css/style.css')
        .pipe(uncss({
            html: ['dist/*.html']
        }))
        .pipe(gulp.dest('dist/css/'));
});
gulp.task('watch',['sass'], function(){
    gulp.watch('app/sass/*.scss', ['sass']);
    //gulp.watch('dist/css/style.css', ['uncss']);

});
gulp.task('default', ['sass', 'uncss', 'watch']);
