// webpack.mix.js

let mix = require('laravel-mix');

mix
.js('src/app.js', 'dist')
.sass('src/style.scss','')
// stringa per inserire html da src a default
.copy('src/index.html','dist')
.setPublicPath('dist');
