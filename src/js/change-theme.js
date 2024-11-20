'use strict';

const lightFavicon = '/light-favicon.svg';
const darkFavicon = '/dark-favicon.svg';

const checkboxEl = document.querySelector('.theme-checkbox');
const bodyEl = document.querySelector('body');
const faviconEl = document.querySelector('link[rel="icon"]');

let isDarkThemeActive = false;
const savedTheme = localStorage.getItem('dark-theme');

// Функция для применения темы при загрузке страницы
function applySavedTheme() {
  if (savedTheme === 'true') {
    bodyEl.classList.add('dark-theme');
    faviconEl.href = darkFavicon;
    checkboxEl.checked = true;
  } else {
    bodyEl.classList.remove('dark-theme');
    faviconEl.href = lightFavicon;
    checkboxEl.checked = false;
  }
}

// Применить сохранённую тему при загрузке страницы
applySavedTheme();

// Обработчик события для переключения темы
checkboxEl.addEventListener('change', () => {
  bodyEl.classList.toggle('dark-theme');
  isDarkThemeActive = !isDarkThemeActive;

  if (isDarkThemeActive) {
    localStorage.setItem('dark-theme', 'true');
    faviconEl.href = darkFavicon;
  } else {
    localStorage.removeItem('dark-theme');
    faviconEl.href = lightFavicon;
  }
});
