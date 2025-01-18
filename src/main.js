import { advantages } from './assets/js/advantages.js';
import { gallery } from './assets/js/gallery.js';

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1200) {
    advantages();
  }
  gallery();
});
