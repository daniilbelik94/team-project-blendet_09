'use strict';

import axios from 'axios';
import iziToast from 'izitoast';

const form = document.querySelector('.work-together-form');
const input = document.querySelector('.work-together-input');
const message = document.querySelector('.work-together-message');
const success = document.querySelector('.work-together-success');
const errorInput = document.querySelector('.work-together-errorInput');
const errorMessage = document.querySelector('.work-together-errorMessage');
const close = document.querySelector('.work-together-close');
const backdrop = document.querySelector('.work-together-backdrop');
const loader = document.querySelector('.work-together-loader');

// Открытие модального окна
const openModal = () => {
  backdrop.classList.add('is-open');
  document.body.classList.add('no-scroll'); // Отключение прокрутки
};

// Закрытие модального окна
const closeModal = () => {
  backdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll'); // Включение прокрутки
};

close.addEventListener('click', closeModal);

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});


const checkEmail = () => {
  if (input.validity.valid) {
    success.style.display = 'block';
    errorInput.style.display = 'none';
  } else {
    success.style.display = 'none';
  }
  if (input.value === '') {
    success.style.display = 'none';
  }
};

input.addEventListener('input', checkEmail);

form.addEventListener('submit', e => {
  e.preventDefault();


  if (input.value.trim() === '') {
    errorInput.style.display = 'block';
    errorInput.textContent = 'The field must be filled';
    return;
  }

  if (message.value.trim() === '') {
    errorMessage.style.display = 'block';
    return;
  }

  errorInput.style.display = 'none';
  errorMessage.style.display = 'none';

  loader.classList.remove('is-hide');

  axios
    .post('https://portfolio-js.b.goit.study/api/requests', {
      email: input.value,
      comment: message.value,
    })
    .then(res => {
      loader.classList.add('is-hide');
      openModal();

      const title = document.querySelector('.work-together-modal-title');
      const text = document.querySelector('.work-together-modal-text');

      title.textContent = res.data.title;
      text.textContent = res.data.message;

      // refresch the form after submit
      form.reset();
      success.style.display = 'none';
    })
    .catch(error => {
      loader.classList.add('is-hide');
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'center',
      });
    });
});
