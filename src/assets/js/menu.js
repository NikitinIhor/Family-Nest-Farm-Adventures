const menuMobile = document.querySelector('.mobile-nav');
const menuOpen = document.querySelector('.nav-btn');
const menuClose = document.querySelector('.close-btn');
const hederBlur = document.querySelector('.header');

menuOpen.addEventListener('click', () => {
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
  menuMobile.style.display = 'block';
  hederBlur.style.backdropFilter = 'blur(40px)';
});

menuClose.addEventListener('click', () => {
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
  menuMobile.style.display = 'none';
  hederBlur.style.backdropFilter = 'none';
});
