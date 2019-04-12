import $ from 'jquery';
import './style.scss';

let num = 0;
const main = $('#main');
setInterval(() => {
  main.html(`You've been on this page for ${num += 1} seconds`);
}, 1000);
