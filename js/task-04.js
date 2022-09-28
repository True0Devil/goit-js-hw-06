let counterValue = 0;

const valueRef = document.querySelector(`#value`);
const decreaseButtonRef = document.querySelector(`button[data-action="decrement"]`);
const increaseButtonRef = document.querySelector(`button[data-action="increment"]`);

increaseButtonRef.addEventListener(`click`, event => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

decreaseButtonRef.addEventListener(`click`, event => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
