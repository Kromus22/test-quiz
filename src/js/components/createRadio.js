import { createElement } from "../helper/createElement.js";

const ANSWER_LENGTH = 3;

//сборка и отрисовка блока с радио.
export const createRadio = (container, data) => {
  container.textContent = '';

  const fieldset = createElement('fieldset', {
    className: 'form__fieldset',
  });

  const top = createElement('div', {
    className: 'form__top',
  });

  const legend = createElement('legend', {
    className: 'form__legend',
    textContent: data.title,
  });

  const step = createElement('span', {
    className: 'step',
  });

  top.append(legend, step);

  const labelWrap = createElement('div', {//проверка, если ответов больше 3, то подставляем другой класс 
    className: `${data.answers.length > ANSWER_LENGTH ?
      'label-wrapper' : 'label-wrapper_flex'}`,
  });

  const createLabels = (answers) => {
    answers.map(answer => {
      const label = createElement('label', {
        className: 'radio',
      });

      const input = createElement('input', {
        className: 'radio__input',
        type: 'radio',
        name: 'radio',
        value: answer,
      });

      const span = createElement('span', {
        className: 'radio__text',
        textContent: answer,
      });

      label.append(input, span);
      labelWrap.append(label);
    });
  }

  createLabels(data.answers);

  fieldset.append(top, labelWrap);
  container.append(fieldset);

  return { step };
}
