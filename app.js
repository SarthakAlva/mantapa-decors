// Responsive navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Scroll Animation using Intersection Observer
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => {
  observer.observe(el);
});


