var gulp = require('gulp');
var RevAll = require('gulp-rev-all');

gulp.task('default', function () {

    gulp
        .src('src/**')
        .pipe(RevAll.revision({dontRenameFile: [/^\/favicon.ico$/g, /^\/index.html/g] }))
        .pipe(gulp.dest('build'))
        .pipe(RevAll.manifestFile())
        .pipe(gulp.dest('build'));

});
