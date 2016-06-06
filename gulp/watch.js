var gulp = require( "gulp" );

var paths = require( "./config" ).paths;

gulp.task( "watch", [ "watch-scripts" ] );

gulp.task( "watch-scripts", function() {

  gulp.watch( paths.build + "js/**/*.js", [ "reload" ] );
  gulp.watch( paths.templates + "*.jade", [ "jade", "reload" ] );
  gulp.watch( paths.styles + "*.styl", [ "css", "reload" ] );

} );
