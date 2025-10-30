const messageState = document.getElementById('messageState');
const message = document.querySelector('.message');
const heart = document.querySelector('.heart');
const container = document.querySelector('.container');
const floatingContainer = document.querySelector('.floating-hearts');

messageState.addEventListener('change', () => {
  if (messageState.checked) {
    message.classList.remove('closed');
    heart.classList.remove('closeHer');
    heart.classList.add('openHer');
    heart.classList.add('beating');
    container.style.backgroundColor = '#f48fb1'; // darker warm pink
  } else {
    heart.classList.remove('openHer');
    heart.classList.add('closeHer');
    heart.classList.remove('beating');
    message.classList.add('closed');
    container.style.backgroundColor = '#f8bbd0'; // lighter warm pink
  }
});

/* CLICK HEART TO SPAWN FLOATING HEARTS */
heart.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    createFloatingHeart();
  }
});

function createFloatingHeart() {
  const h = document.createElement('div');
  h.classList.add('heart-particle');

  // Random position near main heart
  const offsetX = (Math.random() - 0.5) * 50;
  const offsetY = (Math.random() - 0.5) * 50;
  h.style.left = `calc(50% + ${offsetX}px)`;
  h.style.top = `calc(50% + ${offsetY}px)`;

  // Random animation duration and delay
  const duration = 4 + Math.random() * 3; // 4-7s
  h.style.animationDuration = `${duration}s, ${2 + Math.random()*2}s`;

  floatingContainer.appendChild(h);

  // Remove after animation
  setTimeout(() => {
    h.remove();
  }, duration * 1000);
}
