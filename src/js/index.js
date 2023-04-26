import { createRadio } from "./components/createRadio.js";
import { createSelect } from "./components/createSelect.js";
import { createEndScreen } from "./components/createEndScreen.js";
import { items } from "./db.js";

const buttonsBlock = document.querySelector('.buttons');
const nextBtn = document.querySelector('.button-next');
const prevBtn = document.querySelector('.button-prev');
const container = document.querySelector('.form');

let index = 0;

const init = (data) => {

  //проверка, какой тип данных получаем.
  //селекты рисует одна функция, радио - другая.
  if (data.type === 'select') {
    const selectObj = createSelect(container, data);
    selectObj.step.textContent = `Шаг ${data.id}/${items.length + 1}`;
  } else {
    const radioObj = createRadio(container, data);
    radioObj.step.textContent = `Шаг ${data.id}/${items.length + 1}`;
  }
}

init(items[index]);

//функция должна проверять заполненость радио или селектов
//и разблокировать кнопку далее.
//не смог научить её различать селекты от радио.
//всегда падала в вариант радио и селект срабатывает так же, как должен радио.
//то есть, при выборе сразу идёт дальше.
const checkBtns = () => {
  const form = document.querySelector('.form');
  const input = form.querySelector('input[name = "radio"]');
  nextBtn.removeEventListener('click', checkBtns);

  const checked = form.querySelector('input[name = "radio"]:checked');
  form.addEventListener('input', () => {
    if (checked != null) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
      nextBtn.click();
    }
  });
}

checkBtns();

//убираем кнопку Назад, когда на первой странице
//сделал через opacity потому что уже не хотел менять стили и вёрстку
const checkIndex = () => {
  if (index === 0) {
    prevBtn.style.opacity = 0;
    prevBtn.disabled = true;
    prevBtn.style.cursor = 'auto';
  } else if (index !== 0) {
    prevBtn.style.opacity = 1;
    prevBtn.disabled = false;
    prevBtn.style.cursor = 'pointer';
  }
}

checkIndex();

//шаги листаем с помощью переменной index
nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  index++;
  checkIndex();

  const form = document.querySelector('.form');
  form.classList.add('form_inactive');

  setTimeout(() => {//сет таймаут для анимации переходов
    form.classList.remove('form_inactive');
    //проверка, если последний шаг, то отрисовываем форму для заполнения имени и тд.
    if (index === items.length) {
      buttonsBlock.style.display = 'none';
      const endScreenObj = createEndScreen(container);
      endScreenObj.step.textContent = `Шаг ${items.length + 1}/${items.length + 1}`;
    } else {
      init(items[index]);
    }
  }, 550);
  nextBtn.disabled = true;
});

prevBtn.addEventListener('click', (e) => {
  e.preventDefault();

  index--;
  checkIndex();

  const form = document.querySelector('.form');
  form.classList.add('form_inactive');

  setTimeout(() => {
    form.classList.remove('form_inactive');
    init(items[index]);
  }, 550);
});

// многое тут можно отрефакторить и доделать, но уже просто не хватило времени =(