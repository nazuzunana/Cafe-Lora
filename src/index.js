import './style.css';
import { Layer } from './Layer/index.js';

//Zprovoznění navigace

const navBtn = document.querySelector('#nav-btn');

navBtn.addEventListener('click', () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    const navElm = document.querySelector('nav');
    navElm.classList.add('nav-closed');
  });
});

//Objednávání

const orderBtnElm = document.querySelector('.order-btn');
let ordered = false;

const cancelOrder = () => {
  orderBtnElm.textContent = 'Objednat';
  const drinkCup = document.querySelector('.drink__cup');
  drinkCup.classList.remove('drink__cup--selected');
};
const makeOrder = () => {
  orderBtnElm.textContent = 'Zrušit';
  const drinkCup = document.querySelector('.drink__cup');
  drinkCup.classList.add('drink__cup--selected');
};
orderBtnElm.addEventListener('click', (e) => {
  if (ordered === true) {
    cancelOrder();
    ordered = false;
  } else {
    makeOrder();
    ordered = true;
  }
});

const ingredient1 = {
  color: '#feeeca',
  label: 'mléčná pěna',
};

const ingredient2 = {
  color: '#fed7b0',
  label: 'teplé mléko',
};

const ingredient3 = {
  color: '#613916',
  label: 'espresso',
};

/*const Layer = (props) => {
  const { color, label } = props;
  return `
<div class="layer">
<div
  class="layer__color"
  style="background-color: ${color}"
></div>
<div class="layer__label">${label}</div>
</div>
`;
};*/

const drinkInfo = document.querySelector('.drink__info');
drinkInfo.innerHTML += Layer(ingredient1);
drinkInfo.innerHTML += Layer(ingredient2);
drinkInfo.innerHTML += Layer(ingredient3);
