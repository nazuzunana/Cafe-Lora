import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, layers, image } = props;
  let { ordered } = props;
  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img
        src="${image}"
      />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
      </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">Objednat</button>
      </div>
    `;
  const drinkInfo = element.querySelector('.drink__info');
  layers.forEach((layer) => {
    drinkInfo.innerHTML += Layer(layer);
  });

  //Objednávání

  const orderBtnElm = element.querySelector('.order-btn');

  const cancelOrder = () => {
    orderBtnElm.textContent = 'Objednat';
    const drinkCup = element.querySelector('.drink__cup');
    drinkCup.classList.remove('drink__cup--selected');
  };
  const makeOrder = () => {
    orderBtnElm.textContent = 'Zrušit';
    const drinkCup = element.querySelector('.drink__cup');
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

  return element;
};
