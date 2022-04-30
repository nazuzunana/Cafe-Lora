import './style.css';

const navBtn = document.querySelector('#nav-btn');

navBtn.addEventListener('click', (e) => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    const navElm = document.querySelector('nav');
    navElm.classList.add('nav-closed');
  });
});
