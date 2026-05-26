// Scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

const revealEls = document.querySelectorAll(
  '.familiar__item, .block-card, .one-class__item, .for-whom__item, .combined__title, .combined__desc, .not-mix__title, .ninety__title'
);

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

// Stagger children
document.querySelectorAll('.familiar__grid, .combined__blocks, .one-class__grid, .for-whom__grid').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.08}s`;
  });
});
