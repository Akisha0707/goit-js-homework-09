import Notiflix from 'notiflix';

const getForm = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

getForm.addEventListener('submit', getPromiseList);

function getPromiseList(event) {
  event.preventDefault();

  const { delay, amount, step } = event.currentTarget.elements;

  for (let i = 1; i <= Number(amount.value); i++) {
    let getTimePromise = delay.value;
    createPromise(i, delay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${getTimePromise}ms`
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${getTimePromise}ms`
        )
      );
    getTimePromise = Number(delay.value) + Number(step.value) * i;
  }
}
