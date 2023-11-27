const bodyElement = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let getColor;

buttonStart.addEventListener('click', startColor);
buttonStop.addEventListener('click', stopColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startColor(event) {
  getColor = setInterval(() => {
    console.log((bodyElement.style.backgroundColor = getRandomHexColor()));
    console.log('gello');
  }, 1000);
  buttonStart.disabled = true;
}

function stopColor(evt) {
  clearInterval(getColor);
  buttonStart.disabled = false;
}
