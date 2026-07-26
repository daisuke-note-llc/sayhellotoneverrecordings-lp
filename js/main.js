(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  const year = document.querySelector('[data-year]');

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  const closeMenu = () => {
    if (!menuButton || !nav || !header) return;
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    header.classList.remove('menu-visible');
    document.body.classList.remove('menu-open');
  };

  const toggleMenu = () => {
    if (!menuButton || !nav || !header) return;
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
    header.classList.toggle('menu-visible', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  };

  menuButton?.addEventListener('click', toggleMenu);

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });

  window.addEventListener('scroll', setHeaderState, { passive: true });
  setHeaderState();

  if (year) year.textContent = String(new Date().getFullYear());
})();
