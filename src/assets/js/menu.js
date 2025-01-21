export const burger = () => {
  const menuMobile = document.querySelector('.mobile-nav');
  const menuOpen = document.querySelector('.nav-btn');
  const menuClose = document.querySelector('.close-btn');
  const header = document.querySelector('.header');

  const toggleMenu = isOpen => {
    menuOpen.style.display = isOpen ? 'none' : 'block';
    menuClose.style.display = isOpen ? 'block' : 'none';
    menuMobile.style.display = isOpen ? 'block' : 'none';

    if (window.innerWidth < 1200) {
      header.style.backdropFilter = isOpen ? 'blur(40px)' : 'none';
    }
  };

  const updateHeaderBlur = () => {
    if (window.scrollY > 0) {
      header.style.backdropFilter = 'blur(40px)';
    } else {
      header.style.backdropFilter = 'none';
    }
  };

  menuOpen.addEventListener('click', () => toggleMenu(true));
  menuClose.addEventListener('click', () => toggleMenu(false));
  menuMobile.addEventListener('click', () => toggleMenu(false));

  window.addEventListener('scroll', () => {
    if (window.innerWidth >= 1200) {
      updateHeaderBlur();
    } else {
      header.style.backdropFilter =
        window.scrollY > 0 || menuMobile.style.display === 'block'
          ? 'blur(40px)'
          : 'none';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
      updateHeaderBlur();
    } else if (menuMobile.style.display === 'block') {
      header.style.backdropFilter = 'blur(40px)';
    } else {
      header.style.backdropFilter = 'none';
    }
  });
};
