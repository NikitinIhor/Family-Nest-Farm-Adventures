export const animationOfImage = () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(
      '.advantages-image1.animated-image, .advantages-image2.animated-image, .start-image.animated-image'
    )
    .forEach(el => observer.observe(el));
};

export const animationOfFooter = () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(
      '.footer h3.animated-footer, .footer-nav.animated-footer, .footer-reserved.animated-footer'
    )
    .forEach(el => observer.observe(el));
};
