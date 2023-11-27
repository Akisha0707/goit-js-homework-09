const getInput = document.querySelector('.form');
getInput.addEventListener('click', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`); // Fulfill
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`); // Reject
  }
}
