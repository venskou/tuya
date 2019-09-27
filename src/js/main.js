svg4everybody();

const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const mobileQuery = window.matchMedia('(max-width: 767.98px)');
let isNavOpen = false;
let isMobile = false;

function toggleNavVisibility() {
  navToggle.classList.toggle('nav__toggle--active');
  nav.classList.toggle('nav--active');
  isNavOpen = !isNavOpen;
}

function screenTest(query) {
  isMobile = query.matches;
  if (!isMobile && isNavOpen) {
    toggleNavVisibility();
  }
}

navToggle.addEventListener('click', toggleNavVisibility);
mobileQuery.addListener(screenTest);
document.addEventListener('DOMContentLoaded', screenTest);