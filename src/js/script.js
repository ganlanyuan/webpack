// import sayIt from './part';
// sayIt();

// import { tns } from './tiny-slider';

window.onload = function () {
  var slider = tns({
    container: document.querySelector('.slider'),
    items:3,
    slideBy: 'page'
  })
}
// import style from '../scss/main.scss';
function main() {
  var demo = document.querySelector('.demo');
  demo.classList.add('red');
}

// import polyfill from 'dynamic-polyfill'
// polyfill({
//   fills: ['Symbol.match', 'fetch'],
//   options: ['gated'],
//   minify: false,
//   afterFill() {
//     main();
//   }
// })
