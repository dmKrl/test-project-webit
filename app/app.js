const buttonOpenPopup = document.querySelector('.open__button');
const openBlock = document.querySelector('.open');
const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const html = document.querySelector('html');
console.log(body);

body.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.open__button')) {
    popup.classList.toggle('hidden');
    openBlock.classList.toggle('hidden');
  }
  if (!target.closest('.open__button')) {
    popup.classList.toggle('hidden');
    openBlock.classList.toggle('hidden');
  }
});
