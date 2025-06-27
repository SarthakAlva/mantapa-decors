document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.getElementById('nav-links');  // Explicitly use the ul with id 'nav-links'
  const navLinks = document.querySelectorAll('.nav-link');  // Use '.nav-link' class as per your markup

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('show');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navUl.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Intersection Observer for fade-up animation
  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add('visible'));
  }
});
