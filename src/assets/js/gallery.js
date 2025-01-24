export const gallery = () => {
  const slider = document.querySelector('.gallery-list');
  const eggs = document.querySelectorAll('.gallery-egg');
  const items = document.querySelectorAll('.gallery-item');
  const images = document.querySelectorAll('.gallery-item img');

  let currentIndex = 0;

  function updateActiveState() {
    let index = Math.round(slider.scrollLeft / items[0].offsetWidth);

    eggs.forEach((egg, i) => {
      egg.classList.toggle('active', i === index);
    });

    items.forEach((item, i) => {
      item
        .querySelector('figure')
        .classList.toggle('gallery-item-active', i === index + 1);
    });

    currentIndex = index;
  }

  slider.addEventListener('scroll', updateActiveState);

  eggs.forEach((egg, index) => {
    egg.addEventListener('click', () => {
      currentIndex = index;

      slider.scrollTo({
        left: index * items[0].offsetWidth,
        behavior: 'smooth',
      });

      updateActiveState();
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

      updateActiveState();
    }
  });

  rightButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex += 1;
      slider.scrollTo({
        left: currentIndex * items[0].offsetWidth,
        behavior: 'smooth',
      });

      updateActiveState();
    }
  });

  updateActiveState();
};
