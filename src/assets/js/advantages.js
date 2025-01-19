export const advantages = () => {
  const slider = document.querySelector('.advantages-list');
  const eggs = document.querySelectorAll('.egg');
  const items = document.querySelectorAll('.advantages-item');

  function updateActiveEgg() {
    let index = Math.round(slider.scrollLeft / items[0].offsetWidth);
    eggs.forEach((egg, i) => {
      egg.classList.toggle('active', i === index);
    });
  }

  slider.addEventListener('scroll', updateActiveEgg);

  eggs.forEach((egg, index) => {
    egg.addEventListener('click', () => {
      slider.scrollTo({
        left: index * items[0].offsetWidth,
        behavior: 'smooth',
      });
    });
  });

  updateActiveEgg();
};
