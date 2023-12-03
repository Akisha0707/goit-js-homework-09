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

  for (let i = 0; i <= +amount.value; i++) {
    let promiseDelay = +delay.value + +step.value * i;
    createPromise(i, promiseDelay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
  }
}
