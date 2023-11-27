const bodyElement = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let getColor;

buttonStart.addEventListener('click', startColor);
buttonStop.addEventListener('click', stopColor);

//отримуємо випдковий колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//встановлюємо випадковий колір на backgroundColor повязуючи з кнопкою Start(яку робимо неактивною)
function startColor(event) {
  getColor = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
}

//активуємо кнопку і припиняємо виконання setInterval
function stopColor(evt) {
  clearInterval(getColor);
  buttonStart.disabled = false;
}
