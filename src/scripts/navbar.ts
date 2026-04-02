const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('shadow-[0_4px_24px_rgba(0,0,0,0.06)]', window.scrollY > 20);
});

mobileToggle?.addEventListener('click', () => {
  const isOpen = !mobileMenu?.classList.contains('hidden');
  mobileMenu?.classList.toggle('hidden', isOpen);
  mobileMenu?.setAttribute('aria-hidden', String(isOpen));
  mobileToggle.setAttribute('aria-expanded', String(!isOpen));
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileToggle?.setAttribute('aria-expanded', 'false');
  });
});
