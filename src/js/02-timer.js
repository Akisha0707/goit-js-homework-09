import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const getTimer = document.querySelector('.timer');
const getInput = document.querySelector('#datetime-picker');
const getButton = document.querySelector('button[data-start]');

const getDays = document.querySelector('span[data-days]');
const getHours = document.querySelector('span[data-hours]');
const getMinutes = document.querySelector('span[data-minutes]');
const getSeconds = document.querySelector('span[data-seconds]');

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

function convertMs(selectedDates) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(selectedDates / day);
  // Remaining hours
  const hours = Math.floor((selectedDates % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((selectedDates % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor(
    (((selectedDates % day) % hour) % minute) / second
  );
  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const addItem = convertMs(options.defaultDate);

getButton.addEventListener('click', getClickButton);

function getClickButton(event) {
  const abc = setInterval(() => {
    let a = console.log('hello');
    getDays.textContent = addItem.days -= 1;
    getHours.textContent = addItem.hours -= 1;
    getMinutes.textContent = addItem.minutes -= 1;
    getSeconds.textContent = addItem.seconds -= 1;
  }, 1000);

  //   const formatTime = abc.toLocaleTimeString();

  //   clearInterval(getTime);
}

function addLeadingZero(addItem) {
  addItem.padStart('0');
}
