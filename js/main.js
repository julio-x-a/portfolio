import Typed from '../node_modules/typed.js/src/typed.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  const typed = new Typed('#typed-title', {
    strings: ['Julio Acevedo', 'Portfolio.'],
    typeSpeed: 40
  });
});
