var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');


gulp.task('compress-js', function (cb) {
  pump([
        gulp.src(['lib/jquery.min.js', 'lib/angular.min.js', "assets/js/*.js", "controllers/*.js", "directives/*.js"]),
        concat('bundle.min.js'),
        uglify(),
        gulp.dest('dist')
    ],
  );
});

gulp.task('compress-css', function (cb) {
    pump([
          gulp.src("assets/styles/*.css"),
          concat('bundle.min.css'),
          cleanCSS({compatibility: 'ie8'}),
          gulp.dest('dist')
      ],
    );
  });

gulp.task('default', [ 'compress-js', 'compress-css'  ]);