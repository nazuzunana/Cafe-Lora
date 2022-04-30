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

const orderBtn = document.querySelector('.order-btn');
let ordered = false;

const cancelOrder = () => {
  orderBtn.textContent = 'Objednat';
  const drinkCup = document.querySelector('.drink__cup');
  drinkCup.classList.remove('drink__cup--selected');
};
const makeOrder = () => {
  orderBtn.textContent = 'Zrušit';
  const drinkCup = document.querySelector('.drink__cup');
  drinkCup.classList.add('drink__cup--selected');
};
orderBtn.addEventListener('click', (e) => {
  if (ordered === true) {
    cancelOrder();
    ordered = false;
  } else {
    makeOrder();
    ordered = true;
  }
});
