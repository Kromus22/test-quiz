import { createElement } from "../helper/createElement.js";
import { postData } from "../service/postData.js";

//конечный экран для ввода данных
export const createEndScreen = (container) => {
  container.textContent = '';

  const fieldset = createElement('fieldset', {
    className: 'form__fieldset',
  });

  const top = createElement('div', {
    className: 'form__top',
  });

  const legend = createElement('legend', {
    className: 'form__legend',
    textContent: 'Ваша подборка готова! 🥳 Куда нам отправить её?',
  });

  const step = createElement('span', {
    className: 'step',
  });

  top.append(legend, step);

  const inputName = createElement('input', {
    className: 'input-text',
    type: 'text',
    name: 'name',
    placeholder: 'Как вас зовут?',
  });

  const inputPhone = createElement('input', {
    className: 'input-text',
    type: 'text',
    name: 'phone',
    placeholder: 'Номер телефона',
  });

  const inputEmail = createElement('input', {
    className: 'input-text',
    type: 'text',
    name: 'email',
    placeholder: 'E-mail',
  });

  const buttonSubmit = createElement('button', {
    className: 'button-submit',
    textContent: 'Получить подборку',
  });

  const p = createElement('p', {
    className: 'form__text',
    textContent: 'Нажимая на кнопку, вы даете согласие на обработку своих ',
  });

  const a = createElement('a', {
    className: 'form__link',
    textContent: 'Персональных данных',
  });

  p.append(a);

  fieldset.append(top, inputName, inputPhone, inputEmail, buttonSubmit, p);
  container.append(fieldset);

  const form = document.querySelector('.form');
  const submitBtn = document.querySelector('.button-submit');

  //формируем объект для отправки на сервер и отправляем.
  form.addEventListener('input', () => {
    const feedback = {
      userId: 1,
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
    }

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      postData(feedback);
    });
  });

  return { step };
}
