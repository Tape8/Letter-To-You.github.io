const messageState = document.getElementById('messageState');
const message = document.querySelector('.message');
const heart = document.querySelector('.heart');
const container = document.querySelector('.container');

messageState.addEventListener('change', () => {
  if (messageState.checked) {
    message.classList.remove('closed');
    heart.classList.add('openHer');
    container.style.backgroundColor = '#f48fb1'; // darker warm pink
  } else {
    heart.classList.remove('openHer');
    heart.classList.add('closeHer');
    message.classList.add('closed');
    container.style.backgroundColor = '#f8bb
