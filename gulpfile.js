
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const postCSS = require('gulp-postcss');
const postCSSVariables = require('postcss-css-variables');
const postCSSImport = require('postcss-import');
const postCSSUnits = require('postcss-pxtorem');
const postCSSResposiveFont = require('postcss-responsive-type');
const ghPages = require('gulp-gh-pages');

function browserSyncServer(done) {
  browserSync.init({
    server: {
      baseDir: './public',
      notify: false,
    },
  });

  done();
};

function browserSyncReload(done) {
  browserSync.reload();

  done();
}

function html() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
}

function css() {
  return gulp.src('./src/main.css')
    .pipe(postCSS([
      postCSSImport,
      postCSSVariables,
      postCSSUnits,
      postCSSResposiveFont,
    ]))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch('./src/*.html', gulp.series(html, browserSyncReload));
  gulp.watch('./src/*.css', gulp.series(css, browserSyncReload));
}

function deploy() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
}

exports.deploy = gulp.parallel([
  html,
  css,
  deploy,
]);

exports.default = gulp.series([
  html,
  css,
  gulp.parallel(watch, browserSyncServer),
]);