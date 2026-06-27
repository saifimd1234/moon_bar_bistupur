/* =====================================================================
   MOON — interactions
   Kept lightweight & dependency-free.
   ===================================================================== */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', function () {
    setTimeout(function () { loader && loader.classList.add('is-done'); }, 550);
  });
  // safety: never trap the page behind the loader
  setTimeout(function () { loader && loader.classList.add('is-done'); }, 2600);

  /* ---------- Current year ---------- */
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Header: condense on scroll ---------- */
  const header = document.getElementById('header');
  const onScrollHeader = function () {
    if (window.scrollY > 40) header.classList.add('is-stuck');
    else header.classList.remove('is-stuck');
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  /* ---------- Mobile nav ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const toggleNav = function (open) {
    const willOpen = open !== undefined ? open : !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', willOpen);
    burger.classList.toggle('is-open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
    document.body.style.overflow = willOpen ? 'hidden' : '';
  };
  burger && burger.addEventListener('click', function () { toggleNav(); });
  nav && nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { toggleNav(false); });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // gentle stagger for siblings entering together
          const delay = Math.min(i * 80, 240);
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Starfield ---------- */
  const stars = document.getElementById('stars');
  if (stars && !reduceMotion) {
    const count = window.innerWidth < 700 ? 28 : 55;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement('i');
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 70 + '%';
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
      s.style.transform = 'scale(' + (0.5 + Math.random()) + ')';
      frag.appendChild(s);
    }
    stars.appendChild(frag);
  }

  /* ---------- Parallax moon ---------- */
  const moon = document.getElementById('moon');
  if (moon && !reduceMotion) {
    let ticking = false;
    const update = function () {
      const y = window.scrollY;
      moon.style.transform = 'translate3d(' + (-y * 0.04) + 'px,' + (y * 0.14) + 'px,0)';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  }
})();
