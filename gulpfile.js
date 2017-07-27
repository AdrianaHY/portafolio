var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var rutas = {
  html: './src/*.html',
  scss: './src/assets/scss/*.scss',
  js:'./src/assets/js/*.js'
}

// crear tareas
gulp.task('HTML', function(){
  gulp.src(rutas.html)
  .pipe(gulp.dest('./public'))
});

gulp.task('CSS',function(){
  gulp.src(rutas.scss)
  .pipe(sass({
    outputStyle:"compressed"
  }))
  .on('error', sass.logError)
  .pipe(gulp.dest('./public/assets/css'))
});

gulp.task('JS',function(){
  gulp.src(rutas.js)
  .pipe(gulp.dest('./public/assets/js'))
});

//watch

gulp.task('html-watch', ['HTML'], function(done){
  browserSync.reload();
  done();
});
gulp.task('css-watch',['CSS'], function(done){
  browserSync.reload();
  done();
});
gulp.task('js-watch',['JS'], function(done){
  browserSync.reload();
  done();
})

//para leavantar el servidor
gulp.task('serve', function(){
  browserSync.init({
    server:{
      baseDir: './public/'
    }
  });
  //para revisar los cambios y actualizar
  gulp.watch(rutas.html, ['html-watch']);
  gulp.watch(rutas.scss, ['css-watch']);
  gulp.watch(rutas.js['js-watch']);
});
