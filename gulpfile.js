const { src, dest, watch, series } = require("gulp");
//compilar CSS
const sass = require("gulp-sass")(require("sass"));

//Imagenes
const imagemin = require("gulp-imagemin");

function css(done) {
  src("src/scss/app.scss") //?Identificamos el archivo principal
    .pipe(sass())
    .pipe(dest("build/css"));

  done();
}
//watchess
function dev() {
  watch("src/scss/**/*.scss", css);
}
//Minificando imagenes
function imagenes(done) {
  src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("build/img"));
  done();
}
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes, css, dev);
