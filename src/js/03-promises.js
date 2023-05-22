const formEl = document.querySelector(".form");
const firstDelayInput = document.querySelector(`input[name="delay"]`);
const delayStepInput = document.querySelector(`input[name="step"]`);
const amountInput = document.querySelector(`input[name="amount"]`);

formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const amountPromises = amountInput.value;
    const delayStep = parseInt(delayStepInput.value);
    const firstDelay = parseInt(firstDelayInput.value);

    if(delayStep < 0 || firstDelay < 0 || amountPromises <= 0){
      console.log("values must be greater than zero");
      return
    }

    for (let step = 0; step < amountPromises; step++) {
        const promiseDelay = step === 0 ? firstDelay : firstDelay + step * delayStep;
``
        createPromise(step, promiseDelay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }); 

    } 
});


function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
                resolve({ position, delay })
              } else {
                reject({ position, delay })
              }
        }, delay)
    })
  }


  
     