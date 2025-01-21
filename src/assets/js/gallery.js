export const gallery = () => {
  const slider = document.querySelector('.gallery-list');
  const eggs = document.querySelectorAll('.gallery-egg');
  const items = document.querySelectorAll('.gallery-item');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  if (!slider || !items.length || !eggs.length) return;

  let currentIndex = 0;
  const isMobile = window.innerWidth < 768;

  function updateActiveEgg() {
    let index = Math.round(slider.scrollLeft / items[0].offsetWidth);
    index = Math.max(0, Math.min(index, items.length - 1));
    eggs.forEach((egg, i) => egg.classList.toggle('active', i === index));
    currentIndex = index;
  }

  slider.addEventListener('scroll', updateActiveEgg);

  if (isMobile) {
    eggs.forEach((egg, index) => {
      egg.addEventListener('click', () => {
        currentIndex = index;
        slider.scrollTo({
          left: index * items[0].offsetWidth,
          behavior: 'smooth',
        });
      });
    });
  }

  if (leftButton) {
    leftButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        slider.scrollTo({
          left: currentIndex * items[0].offsetWidth,
          behavior: 'smooth',
        });
      }
    });
  }

  if (rightButton) {
    rightButton.addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
        currentIndex += 1;
        slider.scrollTo({
          left: currentIndex * items[0].offsetWidth,
          behavior: 'smooth',
        });
      }
    });
  }

  updateActiveEgg();
};
