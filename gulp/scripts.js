var gulp = require( "gulp" );
var gutil = require( "gulp-util" );
var plumber = require( "gulp-plumber" );

var stylus = require("gulp-stylus");
var rename = require("gulp-rename");
var livereload = require("gulp-livereload");

var browserify = require( "browserify" );
var babelify = require( "babelify" );
var glslify = require( "glslify" );
var watchify = require( "watchify" );
var source = require( "vinyl-source-stream" );

var jade = require("gulp-jade");

var paths = require( "./config" ).paths;

var w = null;


gulp.task("css", function () {
    gulp.src( paths.styles + "global.styl")
        .pipe(stylus({compress: false, paths: [paths.styles]}))
        .pipe(rename("global.css"))
        .pipe(gulp.dest("build/css"))
        .pipe(livereload());


});
gulp.task("jade", function() {
  gulp.src(paths.templates +"*.jade")
    .pipe(jade())
    .pipe(gulp.dest("build"))
});


// SCRIPTS

gulp.task( "scripts", function() {
  create( false );
} );


function create( isBuild ) {
  _isBuild = isBuild;

  watchify.args.paths = [ paths.scripts ];
  watchify.args.extensions = [ ".js" ];
  watchify.args.debug = false;
  watchify.args.fullPaths = false;

  var b = browserify( paths.scripts + "main.js", watchify.args );
  b.transform( babelify );
  b.transform( glslify );

  w = watchify( b, { poll: true } );
  w.on( "update", bundle );

  return bundle();
}

function bundle() {
  return w.bundle()
            .on( "error", gutil.log )
          .pipe( source( "main.js" ) )
          .pipe( gulp.dest( paths.build + "/js" ) );
}
