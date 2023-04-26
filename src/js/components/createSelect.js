import { createElement } from "../helper/createElement.js";

//сборка и отрисовка блока с селектами.
export const createSelect = (container, data) => {
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

  const labelWrap = createElement('div', {
    className: 'label-wrapper',
  });

  const selectWrap = createElement('div', {
    className: 'select-wrapper',
  });

  const arrow = createElement('div', {
    className: 'select-arrow',
  });

  const label = createElement('label', {
    className: 'select-title',
    textContent: `${data.name}`,
  });

  const select = createElement('select', {
    className: 'select-title',
  });

  const createOptions = (answers) => {
    answers.map(answer => {
      const option = createElement('option', {
        textContent: answer,
        value: answer,
      });

      select.append(option);
    });
  }

  createOptions(data.answers);

  selectWrap.append(arrow, label, select);

  labelWrap.append(selectWrap);

  fieldset.append(top, labelWrap);
  container.append(fieldset);

  return { step };
}
