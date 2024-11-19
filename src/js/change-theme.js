'use strict';

const lightFavicon = '/light-favicon.svg';
const darkFavicon = '/dark-favicon.svg';

const checkboxEl = document.querySelector('.theme-checkbox');
const bodyEl = document.querySelector('body');
const faviconEl = document.querySelector('link[rel="icon"]');

const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('dark-theme');

// Функция для применения темы
const applyTheme = (isDark) => {
  if (isDark) {
    bodyEl.classList.add('dark-theme');
    faviconEl.href = darkFavicon;
    checkboxEl.checked = true;
  } else {
    bodyEl.classList.remove('dark-theme');
    faviconEl.href = lightFavicon;
    checkboxEl.checked = false;
  }
};


const initializeTheme = () => {
  if (savedTheme !== null) {
    // Используем сохраненную тему
    applyTheme(savedTheme === 'true');
  } else {
    // Применяем системную тему
    applyTheme(prefersDarkTheme.matches);
  }
};

checkboxEl.addEventListener('change', () => {
  const isDark = checkboxEl.checked;
  localStorage.setItem('dark-theme', isDark);
  applyTheme(isDark);
});

prefersDarkTheme.addEventListener('change', (event) => {
  const isDark = event.matches;

  if (!savedTheme) {
    applyTheme(isDark);
  }
});

initializeTheme();
