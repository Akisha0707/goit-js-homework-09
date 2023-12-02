import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

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
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      getButton.disabled = false;
    }
  },
};

const calendar = flatpickr(getInput, options);

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

const getDays = document.querySelector('span[data-days]');
const getHours = document.querySelector('span[data-hours]');
const getMinutes = document.querySelector('span[data-minutes]');
const getSeconds = document.querySelector('span[data-seconds]');

getButton.addEventListener('click', getClickButton);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function getClickButton(event) {
  let textTime = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      calendar.selectedDates[0] - new Date()
    );

    // addLeadingZero((getDays.textContent = days));
    getDays.textContent = addLeadingZero(days);
    getHours.textContent = addLeadingZero(hours);
    getMinutes.textContent = addLeadingZero(minutes);
    getSeconds.textContent = addLeadingZero(seconds);

    if (
      getDays.textContent === '00' &&
      getHours.textContent === '00' &&
      getMinutes.textContent === '00' &&
      getSeconds.textContent === '00'
    ) {
      clearInterval(textTime);
    }
  }, 1000);
}
