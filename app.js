document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.getElementById('nav-links'); // <ul> holding nav links
  const navLinks = document.querySelectorAll('.nav-link'); // all nav links with 'nav-link' class

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('show');

      // Properly toggle aria-expanded attribute
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
    });

    // Close menu and reset aria-expanded when any nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navUl.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Intersection Observer for fade-up animation on scroll into view
  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerInstance.unobserve(entry.target); // Stop observing after visible
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver support
    fadeElements.forEach(el => el.classList.add('visible'));
  }
});
