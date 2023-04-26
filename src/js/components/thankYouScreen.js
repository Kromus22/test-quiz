export const createThankYouScreen = (item) => {
  const container = document.querySelector('.form-wrapper');
  container.textContent = '';

  container.innerHTML = `
  <p>Спасибо ${item.name}! Мы вышлем результаты на Вашу почту - ${item.email}</p>
  `;
}