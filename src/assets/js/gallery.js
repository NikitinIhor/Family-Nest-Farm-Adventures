export const gallery = () => {
  const slider = document.querySelector('.gallery-list');
  const eggs = document.querySelectorAll('.gallery-egg');
  const items = document.querySelectorAll('.gallery-item');
  const images = document.querySelectorAll('.gallery-item img');

  let currentIndex = 0;

  function updateActiveEgg() {
    let index = Math.round(slider.scrollLeft / items[0].offsetWidth);
    eggs.forEach((egg, i) => {
      egg.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  slider.addEventListener('scroll', updateActiveEgg);

  eggs.forEach((egg, index) => {
    egg.addEventListener('click', () => {
      currentIndex = index;

      slider.scrollTo({
        left: index * items[0].offsetWidth,
        behavior: 'smooth',
      });

      images.forEach((img, i) => {
        img.classList.remove('img-scale');
        if (i === index) {
          img.classList.add('img-scale');
        }
      });
    });
  });

  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  leftButton.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    slider.scrollTo({
      left: currentIndex * items[0].offsetWidth,
      behavior: 'smooth',
    });

    images.forEach((img, i) => {
      img.classList.remove('img-scale');
      if (i === currentIndex) {
        img.classList.add('img-scale');
      }
    });
  });
  rightButton.addEventListener('click', () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    slider.scrollTo({
      left: currentIndex * items[0].offsetWidth,
      behavior: 'smooth',
    });
    images.forEach((img, i) => {
      img.classList.remove('img-scale');
      if (i === currentIndex) {
        img.classList.add('img-scale');
      }
    });
  });

  slider.addEventListener('wheel', event => {
    event.preventDefault();
    slider.scrollBy({
      left: event.deltaY,
      behavior: 'smooth',
    });
  });

  document.querySelector('.gallery-list').addEventListener(
    'wheel',
    e => {
      e.stopPropagation();
    },
    { passive: true }
  );

  updateActiveEgg();
};
