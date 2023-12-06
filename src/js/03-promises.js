import Notiflix from 'notiflix';

const getForm = document.querySelector('.form');

function createPromise(position, getTimePromise) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, getTimePromise });
      } else {
        reject({ position, getTimePromise });
      }
    }, getTimePromise);
  });
}

getForm.addEventListener('submit', getPromiseList);

function getPromiseList(event) {
  event.preventDefault();

  const { delay, amount, step } = event.currentTarget.elements;
  let getTimePromise = delay.value;
  for (let i = 1; i <= Number(amount.value); i++) {
    console.log(getTimePromise);
    createPromise(i, getTimePromise)
      .then(({ position, getTimePromise }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${getTimePromise}ms`
        )
      )
      .catch(({ position, getTimePromise }) =>
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${getTimePromise}ms`
        )
      );
    getTimePromise = Number(delay.value) + Number(step.value) * i;
  }
}
