const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const server = browserSync.create();
const tailwind = require('tailwindcss');

const paths = {
  scss: {
    src: 'static/css/build/*.scss',
    dest: 'static/css/dist/'
  },
  tailwind: {
    src: './config.css',
    dest: 'static/css/dist/'
  }
};

gulp.task('default', ['tailwind', 'build-css', 'watch'], () => {
  server.init({
    proxy: 'localhost:8000',
    files: [paths.scss.dest]
  });
});

gulp.task('build', ['tailwind', 'build-css']);

gulp.task(
  'build-css',
  () =>
  gulp
  .src(paths.scss.src)
  .pipe(plugins.sass())
  .pipe(gulp.dest(paths.scss.dest))
);

gulp.task('reload-css', ['build-css'], () => server.reload());
gulp.task('reload-tailwind', ['tailwind'], () => server.reload());

gulp.task('tailwind',
  () =>
  gulp.src(paths.tailwind.src)
  .pipe(plugins.postcss([
    tailwind('./tailwind.js'),
    require('autoprefixer')
  ]))
  .pipe(plugins.rename('styles.css'))
  .pipe(gulp.dest(paths.tailwind.dest))
);


gulp.task('watch', () => {
  gulp.watch('static/css/**/*.scss', ['reload-css']);
  gulp.watch('templates/**/*.html', () => server.reload());
  gulp.watch('static/js/**/*.js', () => server.reload());
  gulp.watch(['./config.css', './tailwind.js'], ['reload-tailwind']);
});