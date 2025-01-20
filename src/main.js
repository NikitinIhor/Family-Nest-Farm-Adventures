import { advantages } from './assets/js/advantages.js';
import { gallery } from './assets/js/gallery.js';
import { burger } from './assets/js/menu.js';

document.addEventListener('DOMContentLoaded', () => {
  function loadPartial(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById(elementId).innerHTML = html;
      })
      .catch(err => console.warn('Error loading partial:', err));
  }

  loadPartial('/partials/header.html', 'header');

  if (window.innerWidth < 1200) {
    advantages();
  }
  burger();
  gallery();
});
