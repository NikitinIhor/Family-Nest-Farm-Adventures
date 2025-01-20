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
    });
  });

  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      slider.scrollTo({
        left: currentIndex * items[0].offsetWidth,
        behavior: 'smooth',
      });
    }
  });

  rightButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex += 1;
      slider.scrollTo({
        left: currentIndex * items[0].offsetWidth,
        behavior: 'smooth',
      });
    }
  });

  updateActiveEgg();
};
