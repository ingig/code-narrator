const gulp = require('gulp');
const typescript = require('gulp-typescript');
const copy = require('gulp-copy');
const sourcemaps = require('gulp-sourcemaps');
const tsProject = typescript.createProject('tsconfig.json');

gulp.task('compile', () => {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: './src'
        }))
        .pipe(gulp.dest(tsProject.options.outDir));

});

gulp.task('copy', () => {
    gulp.src('./src/**/*.liquid')
        .pipe(copy(tsProject.options.outDir + '/src', {prefix: 1}))
    return gulp.src('./package.json')
        .pipe(copy(tsProject.options.outDir, {prefix: 1}));
});

gulp.task('default', gulp.series('compile', 'copy'));