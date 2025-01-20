export const burger = () => {
  const menuMobile = document.querySelector('.mobile-nav');
  const menuOpen = document.querySelector('.nav-btn');
  const menuClose = document.querySelector('.close-btn');
  const header = document.querySelector('.header');

  const toggleMenu = isOpen => {
    menuOpen.style.display = isOpen ? 'none' : 'block';
    menuClose.style.display = isOpen ? 'block' : 'none';
    menuMobile.style.display = isOpen ? 'block' : 'none';
    header.style.backdropFilter = isOpen ? 'blur(40px)' : 'none';
  };

  menuOpen.addEventListener('click', () => toggleMenu(true));
  menuClose.addEventListener('click', () => toggleMenu(false));

  window.addEventListener('scroll', () => {
    header.style.backdropFilter = window.scrollY > 0 ? 'blur(40px)' : 'none';
  });
};
