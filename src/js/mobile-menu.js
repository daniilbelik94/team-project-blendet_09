'use strict';

const openMenu = () => {
  document.querySelector('.mob-menu-container').classList.add('is-open');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  document.querySelector('.mob-menu-container').classList.remove('is-open');
  document.body.style.overflow = 'auto';
};

document.querySelector('.open-menu-btn').addEventListener('click', openMenu);
document.querySelector('.close-menu-btn').addEventListener('click', closeMenu);

const scrollToSection = event => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href').slice(1);
  const targetSection = document.getElementById(targetId);

  closeMenu();

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
};

document.querySelectorAll('.mob-menu-list a').forEach(link => {
  link.addEventListener('click', scrollToSection);
});
