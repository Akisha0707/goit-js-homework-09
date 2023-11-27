import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const getTimer = document.querySelector('.timer');
const getInput = document.querySelector('#datetime-picker');
const getButton = document.querySelector('button[data-start]');

getTimer.style.fontSize = '20px';
getTimer.style.display = 'flex';
getTimer.style.gap = '10px';
getInput.style.fontSize = '20px';
getButton.style.fontSize = '20px';

getButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      window.alert('Please choose a date in the future');
    } else {
      getButton.disabled = false;
    }
  },
};

flatpickr(getInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

getButton.addEventListener('click', getClickButton);

function getClickButton(event) {
  const getTime = setInterval(() => {
    toString(convertMs());
  }, 1000);
  clearInterval(getTime);
}

function addLeadingZero(value) {
  console.log(padStart(convertMs()));
}
