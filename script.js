const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const backTop = document.querySelector('.back-top');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 500);
});

backTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
